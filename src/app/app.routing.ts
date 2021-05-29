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
        path: 'admin',
        loadChildren: (): Promise<unknown> => import('./admin-module/admin.module').then((m) => m.RequestsModule),
      },
      {
        path: 'access-denied',
        redirectTo: '',
      },
    ]
  }
]