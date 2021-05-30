import { Routes } from "@angular/router";
import { UserViewComponent } from "./components/user-view/user-view.component";
import { UserViewResolver } from "./components/user-view/user-view.resolver";
import { UsersListComponent } from "./components/users-list/users-list.component";
import { UsersListResolver } from "./components/users-list/users-list.resolver";

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: UsersListComponent,
        resolve: {
          data: UsersListResolver,
        }
      },
      {
        path: ':userId',
        component: UserViewComponent,
        resolve: {
          data: UserViewResolver,
        }
      }
    ]
  }
]