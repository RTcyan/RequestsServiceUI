import { Injectable } from '@angular/core';
import { DataService } from '@core/http/data.service';
import { Observable } from 'rxjs';
import { UserDetail } from '@model/model/authority/user-detail';

export enum Api {
  AUTH = '/v1/securities/auth'
}

/**
 * Provides resources for working with authentication
 */
@Injectable({providedIn: "root"})
export class AuthenticationRepository {

  constructor(private dataService: DataService) { }

  public auth(): Observable<UserDetail> {
    return this.dataService.get<UserDetail>(Api.AUTH);
  }

}