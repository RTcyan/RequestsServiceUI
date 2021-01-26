import { NgModule } from '@angular/core';
import { FullAuthenticationGuard } from './guard/full-authentication.guard';
import { NoAuthenticationGuard } from './guard/no-authentication.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SecurityContextHolderInterceptor } from './interceptor/security-context-holder-interceptor';
import { CookieService } from 'ngx-cookie-service';
import { DaoModule } from '../dao-module/dao.module';
import { JwtTokenRequestInterceptor } from './interceptor/jwt-token-request.interceptor';
import { JwtTokenResponseInterceptor } from './interceptor/jwt-token-response.interceptor';
import { UnauthorizedInterceptor } from './interceptor/unauthorized-interceptor';
import { NgxPermissionsModule } from 'ngx-permissions';
import { StudentAuthenticationGuard } from './guard/student-authentication.guard';
import { OperatorAuthenticationGuard } from './guard/operator-authentication.guard';

@NgModule({
  declarations: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtTokenRequestInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtTokenResponseInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: SecurityContextHolderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: UnauthorizedInterceptor, multi: true },
    FullAuthenticationGuard,
    StudentAuthenticationGuard,
    OperatorAuthenticationGuard,
    NoAuthenticationGuard,
    CookieService,
  ],
  imports: [
    DaoModule,
    NgxPermissionsModule.forChild(),
  ]
})
export class SecurityModule {
}
