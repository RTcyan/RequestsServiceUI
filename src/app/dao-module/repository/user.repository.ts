import { Injectable } from '@angular/core';
import { DataService } from '@core/http/data.service';
import { Page } from '@model/model/common/page';
import { SortDirection } from '@model/model/common/sort-direction';
import { DeputyInfo } from '@model/model/deputy/deputy-info';
import { Reference } from '@model/model/reference/reference';
import { User } from '@model/model/user/user';
import { UserRequest } from '@model/model/user/user-request';
import { Workgroup } from '@model/model/workgroup/workgroup';
import { classToPlain, plainToClass } from 'class-transformer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export enum Api {
  USER_RESOURCE = '/v1/users'
}

/**
 * Provides resources for working with users
 */
@Injectable({ providedIn: "root" })
export class UserRepository {

  constructor(private dataService: DataService) { }

  /**
   * Returns user by id
   * 
   * @param id - user id
   */
  public getUserById(id: number): Observable<User> { 
    const uri = `${Api.USER_RESOURCE}/${id}`;
    return this.dataService.get<User>(uri).pipe(
      map((response: User) => plainToClass(User, response) as User)
    );
  }

  /**
   * Returns user deputies by id
   * 
   * @param id - user id
   */
  public getUserDeputiesById(id: number): Observable<User[]> {
    const uri = `${Api.USER_RESOURCE}/${id}/deputies`;

    return this.dataService.get<User[]>(uri).pipe(
      map((response: User[]) => plainToClass(User, response) as User[])
    );
  }

  /**
   * Returns user workgroups by id
   * 
   * @param id - user id
   */
  public getUserWorkgroupsById(id: number): Observable<Workgroup[]> {
    const uri = `${Api.USER_RESOURCE}/${id}/workgroups`;

    return this.dataService.get<Workgroup[]>(uri).pipe(
      map((response: Workgroup[]) => plainToClass(Workgroup, response) as Workgroup[])
    );
  }

  /**
   * Saves or updates user
   * 
   * @param user - saveabale reference 
   */
  public saveUser(user: User): Observable<User> {
    const uri = `${Api.USER_RESOURCE}`;

    return this.dataService.post<User>(uri, classToPlain(user)).pipe(
      map((response: User) => plainToClass(User, response))
    );
  }

  /**
   * Add deputy to user
   * 
   * @param id - user id
   * @param deputyInfo - deputyInfo
   */
  public addDeputyUser(id: number, deputyInfo: DeputyInfo): Observable<any> {
    const uri = `${Api.USER_RESOURCE}/${id}/deputies`;

    return this.dataService.post<User>(uri, classToPlain(deputyInfo));
  }

  /**
   * Deletes user deputy by id
   * 
   * @param userId - user unique identifier
   * @param depityId - deputy unique identifier
   */
  public deleteUserDeputy(userId: number, depityId: number): Observable<any> {
    const uri = `${Api.USER_RESOURCE}/${userId}/deputies/${depityId}`;

    return this.dataService.delete<Reference>(uri);
  }


  /**
   * Returns page of user by given parameters
   * 
   * @param userRequest - informations of user request
   */
  public find(userRequest: UserRequest): Observable<Page<User>> {
    const uri = `${Api.USER_RESOURCE}/page`;

    let queryParams = {};
    /**
     * Define query pagging parameters
     */
    queryParams['pageNumber'] = userRequest.pageNumber && userRequest.pageNumber >= 0 ? userRequest.pageNumber : 0;
    queryParams['pageSize'] = userRequest.pageSize && userRequest.pageSize > 0 ? userRequest.pageSize : 10;

    /**
     * Define query sort parameters
     */
    queryParams['sortDirection'] = userRequest.sortDirection || SortDirection.ASC;
    queryParams['sortProperty'] = userRequest.sortProperty || 'userId';

    /**
     * Define else parameter
     */
    if (userRequest.role) {
      queryParams['role'] = userRequest.role;
    }
    if (userRequest.fullNameLike) {
      queryParams['fullNameLike'] = userRequest.fullNameLike;
    }

    return this.dataService.get<Page<User>>(uri, null, queryParams).pipe(
      map((response: Page<User>) => {
        let page: Page<User> = response;
        page.content = plainToClass(User, response.content) as User[];
        return page;
      })
    );
  }

}