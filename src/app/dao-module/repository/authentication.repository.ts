import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'app/core-module/http/data.service';
import { AuthUser } from 'app/model-module/model/auth-user/AuthUser';
import { Observable, throwError } from 'rxjs';
import { catchError, mergeMap, tap } from 'rxjs/operators';

export enum Api {
  AUTH = '/api/user/current',
  SIGN_IN = '/api/user/signin',
}


const JWT_NAME = "jwt_token";
const FORM_URLENCODED_HEADERS = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

@Injectable({ providedIn: "root" })
export class AuthenticationRepository {

  constructor(
    private dataService: DataService,
    private router: Router) { }

  public signin(username: string, password: string): Observable<AuthUser> {
    const httpParams = new HttpParams()
      .set('Login', username)
      .set('Password', password);

    return this.dataService.post<AuthUser>(
      Api.SIGN_IN,
      {Login: username, Password: password},
      FORM_URLENCODED_HEADERS,
    ).pipe(
      mergeMap(() => this.auth()),
    );
  }

  public logout(): void {
    localStorage.removeItem(JWT_NAME);
    this.router.navigate(['/logout']);
  }

  public auth(): Observable<AuthUser> {
    return this.dataService.get<AuthUser>(Api.AUTH).pipe(
      tap(it => console.log(it)),
      catchError((e) => {
        localStorage.removeItem(JWT_NAME);
        return throwError(e);
      }),
    );
  }


}