import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AuthenticationRepository } from '@dao/repository/authentication.repository';

@Injectable()
export class FullAuthenticationGuard implements CanActivate {

  constructor(private authenticationRepository: AuthenticationRepository, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authenticationRepository.auth().pipe(
      map((userDetail) => {
        if(!userDetail) {
          this.router.navigate(['/access-denied']);
        }
        return userDetail ? true : false
      }),
      catchError(() => {
        this.router.navigate(['/access-denied']);
        return of(false);
      })
    ).toPromise();
  }

}
