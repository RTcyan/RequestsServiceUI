import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared-module/shared.module';
import { UserViewComponent } from './components/user-view/user-view.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { routes } from './users.routing';

const COMPONENTS = [
  UsersListComponent,
  UserViewComponent,
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
export class UsersModule {
}
