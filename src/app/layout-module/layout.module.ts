
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DaoModule } from 'app/dao-module/dao.module';
import { SharedModule } from '../shared-module/shared.module';
import { HeaderComponent } from './header/header.component';
import { SignInDialogComponent } from './header/sign-in-dialog/sign-in-dialog.component';
import { SignUpDialogComponent } from './header/sign-up-dialog/sign-up-dialog.component';

/**
 * Module, 
 * that contain dao layer services
 */

const COMPONENTS = [
  HeaderComponent,
  SignInDialogComponent,
  SignUpDialogComponent,
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
    ...COMPONENTS,
  ],
  imports: [
    SharedModule,
    DaoModule,
    RouterModule,
  ]
})
export class LayoutModule {
}
