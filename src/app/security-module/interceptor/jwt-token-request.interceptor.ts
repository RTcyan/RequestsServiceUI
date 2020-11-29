import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class JwtTokenRequestInterceptor implements HttpInterceptor {
  public constructor(private cookieService: CookieService) {
  }

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request);
    if (this.cookieService.check('jwt_token')) {
      localStorage.setItem('jwt_token', this.cookieService.get('jwt_token'));
      this.cookieService.deleteAll('jwt_token');
    }
    let requestWithAuth = request;
    const token = localStorage.getItem('jwt_token');
    if (token && token.length > 0) {
      requestWithAuth = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    return next.handle(requestWithAuth);
  }
}
