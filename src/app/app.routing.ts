import { Routes } from '@angular/router';
import { FullAuthenticationGuard } from './security-module/guard/full-authentication.guard';
import { NoAuthenticationGuard } from './security-module/guard/no-authentication.guard';

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
  
    ]
  }
]