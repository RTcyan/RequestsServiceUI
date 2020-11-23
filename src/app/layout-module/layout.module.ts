import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material';
import { CoreModule } from '../core-module/core.module';
import { ModelModule } from '../model-module/model.module';
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
  ]
})
export class LayoutModule {
}
