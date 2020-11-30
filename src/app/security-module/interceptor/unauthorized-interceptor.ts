// TODO: eslint
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

const AUTH_URL = '/api/user/current';
const SIGNIN_URL = '/api/user/signin';
@Injectable()
export class UnauthorizedInterceptor implements HttpInterceptor {
  public constructor(private router: Router) {
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error) => this.handle(error)) as any,
    );
  }

  private handle(err: HttpErrorResponse): Observable<any> {
    if (err.status === 401
      && !err.url.endsWith(AUTH_URL)
      && !err.url.endsWith(SIGNIN_URL)) {
      this.router.navigate(['/']);
      return of(err.message);
    }

    return throwError(err);
  }
}
