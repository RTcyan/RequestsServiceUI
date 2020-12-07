import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared-module/shared.module';
import { AddRequestsComponent } from './components/add-request/add-requests.component';
import { CurrentUserRequestsComponent } from './components/current-user-requests/current-user-requests.component';
import { routes } from './requests.routing';

const COMPONENTS = [
  CurrentUserRequestsComponent,
  AddRequestsComponent,
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
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    CommonModule,
  ]
})
export class RequestsModule {
}
