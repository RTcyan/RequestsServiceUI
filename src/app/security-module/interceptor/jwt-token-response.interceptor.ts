import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpResponse,
  } from '@angular/common/http';
  import { Observable } from 'rxjs';
  import { tap } from 'rxjs/operators';
  import { Injectable } from '@angular/core';
  
  const AUTHORIZATION_HEADER = 'Authorization';
  const BEARER_AUTHORIZATION = 'Bearer ';
  
  @Injectable()
  export class JwtTokenResponseInterceptor implements HttpInterceptor {
    // TODO: eslint
    // eslint-disable-next-line class-methods-use-this
    public intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
      return next.handle(req).pipe(
        tap((resp) => {
          if (resp instanceof HttpResponse) {        
            const authorization = resp.headers.get(AUTHORIZATION_HEADER);
            if (
              authorization && authorization.length > 0
              && authorization.lastIndexOf(BEARER_AUTHORIZATION, 0) === 0
            ) {
              const jwtToken = authorization.split(BEARER_AUTHORIZATION)[1];
              localStorage.setItem('jwt_token', jwtToken);
            }
          }
        }),
      );
    }
  }
  