/**
 * Module, 
 * that contain dao layer services
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatDialogModule, MatInputModule, MatSelectModule } from '@angular/material';
import { MapComponent } from './components/map/map.component';

const MATERIAL_CONTROLS = [
  MatInputModule,
  MatCheckboxModule,
  MatButtonModule,
  MatDatepickerModule,
  MatSelectModule,
]

const COMPONENTS = [
  MapComponent
]

const MODULES = [
  MatDialogModule,
  ReactiveFormsModule,
  CommonModule,
]

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  exports: [
    ...COMPONENTS,
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
