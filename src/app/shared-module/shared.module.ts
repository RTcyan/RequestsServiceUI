/**
 * Module, 
 * that contain dao layer services
 */
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatDialogModule, MatInputModule } from '@angular/material';

const MATERIAL_CONTROLS = [
  MatInputModule,
  MatCheckboxModule,
  MatButtonModule,
]

const MODULES = [
  MatDialogModule,
  ReactiveFormsModule,
]

@NgModule({
  declarations: [

  ],
  exports: [
    ...MODULES,
    ...MATERIAL_CONTROLS,
  ],
  providers: [
  ],
  imports: [
    ...MODULES,
    ...MATERIAL_CONTROLS,
  ]
})
export class SharedModule {
}
