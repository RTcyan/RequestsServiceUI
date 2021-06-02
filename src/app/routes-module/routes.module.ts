import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared-module/shared.module';
import { routes } from './routes.routing';
import { RouteListComponent } from './components/route-list/route-list.component';
import { RouteViewComponent } from './components/route-view/route-view.component';
import { MatInputModule } from '@angular/material';

const COMPONENTS = [
  RouteListComponent,
  RouteViewComponent,
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
    MatInputModule,
  ]
})
export class RequestsModule {
}
