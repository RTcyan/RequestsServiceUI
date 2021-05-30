import { Routes } from '@angular/router';
import { NoAuthenticationGuard } from './security-module/guard/no-authentication.guard';

export const appRoutes: Routes = [
  {
    path: '',
    canActivate: [NoAuthenticationGuard],
    children: [
      {
        path: 'logout',
        redirectTo: '',
      },
      {
        path: 'routes',
        loadChildren: (): Promise<unknown> => import('./routes-module/routes.module').then((m) => m.RequestsModule),
      },
      {
        path: 'users',
        loadChildren: (): Promise<unknown> => import('./users-module/users.module').then((m) => m.UsersModule)
      },
      {
        path: 'access-denied',
        redirectTo: '',
      },
    ]
  }
]