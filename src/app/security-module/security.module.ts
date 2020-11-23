import { NgModule } from '@angular/core';
import { FullAuthenticationGuard } from './guard/full-authentication.guard';
import { NoAuthenticationGuard } from './guard/no-authentication.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SecurityContextHolderInterceptor } from './interceptor/security-context-holder-interceptor';
import { CookieService } from 'ngx-cookie-service';
import { ModelModule } from '../model-module/model.module';
import { DaoModule } from '../dao-module/dao.module';

@NgModule({
  declarations: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SecurityContextHolderInterceptor, multi: true },
    FullAuthenticationGuard,
    NoAuthenticationGuard,
    CookieService,
  ],
  imports: [
    ModelModule,
    DaoModule
  ]
})
export class SecurityModule {
}
