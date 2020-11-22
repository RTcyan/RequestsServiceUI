import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { CONFIG_LOADER_PROVIDES } from './config/config-loader';
import { CacheInterceptor } from './interceptor/cache-interceptor';
import { MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material';
import { MatMomentDateModule, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';

/**
 * Core configuration module
 */

const COMPONENTS: any[] = [
  ``
]

@NgModule({
  declarations: [...COMPONENTS],
  providers: [
    ...CONFIG_LOADER_PROVIDES,
    DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true },
    { provide: MAT_DATE_LOCALE, useValue: 'ru-RU' },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatMomentDateModule,
  ],
  exports: [
    HttpClientModule,
    ...COMPONENTS],
  entryComponents: [...COMPONENTS]
})
export class CoreModule {
}
