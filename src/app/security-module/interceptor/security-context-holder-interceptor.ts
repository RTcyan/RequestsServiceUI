import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpResponse, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { SecurityContextHolder } from '@security/context/security-context-holder';
import { tap, catchError } from 'rxjs/operators';
import { UserDetail } from '@model/model/authority/user-detail';

const AUTH_URL = '/auth';

@Injectable()
export class SecurityContextHolderInterceptor implements HttpInterceptor {

  constructor(
    private securityContextHolder: SecurityContextHolder
  ) { }
  
  private handle(response: HttpResponse<UserDetail>) {
    const currentUser = this.securityContextHolder.user.getValue();
    const interceptUser = response.body;
    if(!currentUser || currentUser.username !== interceptUser.username) {
      this.securityContextHolder.user.next(response.body);
    }
  }

  private handleError(err: HttpErrorResponse): Observable<any> {
    if (err.status === 401) {
      const currentUser = this.securityContextHolder.user.getValue();
      if(currentUser) {
        this.securityContextHolder.user.next(null);
      }
    }
    return throwError(err);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Security Interceptor');

    return next.handle(req).pipe(
      tap(resp => {
        if (resp instanceof HttpResponse && resp.url.endsWith(AUTH_URL) && resp.body && resp.status === 200) {
          this.handle(resp);
        }
      }),
      catchError((error) => this.handleError(error)) as any
    ); 
  }
    
}