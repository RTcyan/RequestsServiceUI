import { NgModule } from '@angular/core';
import { CoreModule } from '../core-module/core.module';
import { ModelModule } from '../model-module/model.module';

/**
 * Module, 
 * that contain dao layer services
 */

@NgModule({
  declarations: [],
  providers: [
  ],
  imports: [
    CoreModule,
    ModelModule
  ]
})
export class DaoModule {
}
