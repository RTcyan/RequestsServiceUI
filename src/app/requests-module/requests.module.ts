import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared-module/shared.module';
import { AddRequestsComponent } from './components/add-request/add-requests.component';
import { CurrentUserRequestsComponent } from './components/current-user-requests/current-user-requests.component';
import { OperatorRequestComponent } from './components/operator-request/operator-request.component';
import { OperatorRequestsComponent } from './components/operator-requests/operator-requests.component';
import { RequestComponent } from './components/request/request.component';
import { routes } from './requests.routing';

const COMPONENTS = [
  CurrentUserRequestsComponent,
  AddRequestsComponent,
  RequestComponent,
  OperatorRequestsComponent,
  OperatorRequestComponent
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
