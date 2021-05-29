import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared-module/shared.module';
import { routes } from './admin.routing';

const COMPONENTS = [
]

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  entryComponents: [
    ...COMPONENTS,
  ],
  exports: [
    ...COMPONENTS,
  ],
  providers: [
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    RouterModule,
  ]
})
export class RequestsModule {
}
