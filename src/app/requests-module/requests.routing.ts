import { OperatorAuthenticationGuard } from 'app/security-module/guard/operator-authentication.guard';
import { StudentAuthenticationGuard } from 'app/security-module/guard/student-authentication.guard';
import { AddRequestsComponent } from './components/add-request/add-requests.component';
import { AddRequestsPageResolver } from './components/add-request/add-requests.resolver';
import { CurrentUserRequestsComponent } from "./components/current-user-requests/current-user-requests.component";
import { CurrentUserRequestsPageResolver } from './components/current-user-requests/current-user-requests.resolver';
import { OperatorRequestComponent } from './components/operator-request/operator-request.component';
import { OperatorRequestPageResolver } from './components/operator-request/operator-request.resolver';
import { OperatorRequestsComponent } from './components/operator-requests/operator-requests.component';
import { OperatorRequestsPageResolver } from './components/operator-requests/operator-requests.resolver';
import { RequestComponent } from './components/request/request.component';
import { RequestPageResolver } from './components/request/request.resolver';

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
        canActivate: [StudentAuthenticationGuard],
      }, 
      {
        path: 'add',
        component: AddRequestsComponent,
        resolve : {
          data: AddRequestsPageResolver,
        },
        canActivate: [StudentAuthenticationGuard],
      },
      {
        path: 'operator',
        canActivate: [OperatorAuthenticationGuard],
        children: [
          {
            path: '',
            component: OperatorRequestsComponent,
            resolve: {
              data: OperatorRequestsPageResolver,
            },
          },
          {
            path: ':id',
            component: OperatorRequestComponent,
            resolve : {
              data: OperatorRequestPageResolver,
            },
          }
        ]
      },
      {
        path: ':id',
        component: RequestComponent,
        resolve : {
          data: RequestPageResolver,
        },
      },
    ]
  }
]