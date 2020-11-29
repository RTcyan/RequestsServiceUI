import { NgModule } from '@angular/core';
import { DaoModule } from 'app/dao-module/dao.module';
import { SharedModule } from '../shared-module/shared.module';
import { HeaderComponent } from './header/header.component';
import { SignInDialogComponent } from './header/sign-in-dialog/sign-in-dialog.component';

/**
 * Module, 
 * that contain dao layer services
 */

const COMPONENTS = [
  HeaderComponent,
  SignInDialogComponent,
]

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  exports: [
    ...COMPONENTS,
  ],
  providers: [
  ],
  entryComponents: [
    SignInDialogComponent,
  ],
  imports: [
    SharedModule,
    DaoModule,
  ]
})
export class LayoutModule {
}
