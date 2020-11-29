import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationRepository } from 'app/dao-module/repository/authentication.repository';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class NoAuthenticationGuard implements CanActivate {

  constructor(private authenticationRepository: AuthenticationRepository) { }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean 
  {
    return this.authenticationRepository.auth().pipe(
        map(() => {
            return true;
        }), catchError(() => {
            return of(true);
        })
    ).toPromise();
  }
    
}
