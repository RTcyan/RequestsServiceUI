import { Routes } from '@angular/router';
import { FullAuthenticationGuard } from './security-module/guard/full-authentication.guard';
import { NoAuthenticationGuard } from './security-module/guard/no-authentication.guard';
import { StudentAuthenticationGuard } from './security-module/guard/student-authentication.guard';

export const appRoutes: Routes = [
  {
    path: '',
    canActivate: [NoAuthenticationGuard],
    children: [
      {
        path: 'logout',
        redirectTo: '',
        canActivate: [FullAuthenticationGuard],
      },
      {
        path: 'requests',
        loadChildren: (): Promise<unknown> => import('./requests-module/requests.module').then((m) => m.RequestsModule),
        canActivate: [FullAuthenticationGuard],
      },
      {
        path: 'access-denied',
        redirectTo: '',
      },
    ]
  }
]