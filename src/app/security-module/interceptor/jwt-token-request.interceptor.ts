import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

const JWT_NAME = "jwt_token" 

@Injectable()
export class JwtTokenRequestInterceptor implements HttpInterceptor {
  public constructor(private cookieService: CookieService) {
  }

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.cookieService.check(JWT_NAME)) {
      localStorage.setItem(JWT_NAME, this.cookieService.get(JWT_NAME));
      this.cookieService.deleteAll(JWT_NAME);
    }
    let requestWithAuth = request;
    const token = localStorage.getItem(JWT_NAME);
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
