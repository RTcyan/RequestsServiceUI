import {
  HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor,
  HttpRequest, HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthUser } from 'app/model-module/model/auth-user/AuthUser';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { SecurityContextHolder } from '../context/security-context-holder';

const AUTH_URL = '/api/user/current';

@Injectable()
export class SecurityContextHolderInterceptor implements HttpInterceptor {
  public constructor(private securityContextHolder: SecurityContextHolder) {
  }

  private handle(response: HttpResponse<AuthUser>): void {
    const currentUser = this.securityContextHolder.user.getValue();
    const interceptUser = response.body;
    if (!currentUser || currentUser.id !== interceptUser.id) {
      this.securityContextHolder.user.next(response.body);
    }
  }

  private handleError(err: HttpErrorResponse): Observable<HttpEvent<unknown>> {
    if (err.status === 401) {
      const currentUser = this.securityContextHolder.user.getValue();
      if (currentUser) {
        localStorage.removeItem('jwt_token');
        this.securityContextHolder.user.next(null);
      }
    }
    return throwError(err);
  }

  public intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(req).pipe(
      tap((resp) => {
        if (resp instanceof HttpResponse && resp.url.endsWith(AUTH_URL) && resp.body && resp.status === 200) {
          this.handle(resp);
        }
      }),
      catchError((error) => this.handleError(error)),
    );
  }
}
