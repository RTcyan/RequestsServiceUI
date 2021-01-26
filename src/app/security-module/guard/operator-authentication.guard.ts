import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationRepository } from 'app/dao-module/repository/authentication.repository';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class OperatorAuthenticationGuard implements CanActivate {

  constructor(private authenticationRepository: AuthenticationRepository, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authenticationRepository.auth().pipe(
      map((userDetail) => {
        if(!userDetail) {
          this.router.navigate(['/access-denied']);
        }
        
        return (userDetail.employee ? userDetail.employee.operator : false ) ? true : false;
      }),
      catchError(() => {   
        this.router.navigate(['/access-denied']);
        return of(false);
      })
    ).toPromise();
  }

}
