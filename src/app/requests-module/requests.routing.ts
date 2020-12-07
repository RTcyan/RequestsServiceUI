import { AddRequestsComponent } from './components/add-request/add-requests.component';
import { AddRequestsPageResolver } from './components/add-request/add-requests.resolver';
import { CurrentUserRequestsComponent } from "./components/current-user-requests/current-user-requests.component";
import { CurrentUserRequestsPageResolver } from './components/current-user-requests/current-user-requests.resolver';

export const routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CurrentUserRequestsComponent,
        resolve: {
          data: CurrentUserRequestsPageResolver,
        },
      }, 
      {
        path: 'add',
        component: AddRequestsComponent,
        resolve : {
          data: AddRequestsPageResolver,
        },
      }
    ]
  }
]