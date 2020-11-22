import { NgModule } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { ModelModule } from '@model/model.module';

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
