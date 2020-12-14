import { Injectable } from '@angular/core';
import { DataService } from 'app/core-module/http/data.service';
import { SignUpUser } from 'app/model-module/model/user/sign-up-user';
import { Observable } from 'rxjs';

export enum Api {
  USER_RESOURCE = '/api/user'
}

/**
 * Provides resources for working with faculties
 */
@Injectable({ providedIn: "root" })
export class UserRepository {

  constructor(private dataService: DataService) { }

  /**
   * Returns faculties
   */
  public signUp(signUpModel: SignUpUser): Observable<any> { 
    const uri = `${Api.USER_RESOURCE}/signup`;
    return this.dataService.post<any>(uri, signUpModel);
  }
}