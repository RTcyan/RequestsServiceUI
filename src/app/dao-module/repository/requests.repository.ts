import { Injectable } from '@angular/core';
import { DataService } from 'app/core-module/http/data.service';
import { NewUserRequest } from 'app/model-module/model/request/new-user-request';
import { RequestEnd } from 'app/model-module/model/request/request-end';
import { UserRequest } from 'app/model-module/model/request/user-request';
import { Observable } from 'rxjs';

export enum Api {
  REQUEST_RESOURCE = '/api/request'
}

/**
 * Provides resources for working with faculties
 */
@Injectable({ providedIn: "root" })
export class RequestRepository {

  constructor(private dataService: DataService) { }

  /**
   * Returns faculties
   */
  public getCurrentRequests(): Observable<UserRequest[]> { 
    const uri = `${Api.REQUEST_RESOURCE}/current`;
    return this.dataService.get<UserRequest[]>(uri);
  }

  public addNewRequest(request: NewUserRequest): Observable<any> {
    const uri = `${Api.REQUEST_RESOURCE}/add`;
    return this.dataService.post(uri, request)
  }

  public getRequestById(id: number): Observable<UserRequest> {
    const uri = `${Api.REQUEST_RESOURCE}/${id}`;
    return this.dataService.get<UserRequest>(uri);
  }

  public getRequestsByDepId(id: number): Observable<UserRequest[]> {
    const uri = `${Api.REQUEST_RESOURCE}/department/${id}`;
    return this.dataService.get<UserRequest[]>(uri);
  }

  public changeStatusInProgressOnRequest(requestId: number): Observable<UserRequest> {
    const uri = `${Api.REQUEST_RESOURCE}/${requestId}/inProgress`;
    return this.dataService.put<UserRequest>(uri);
  }

  public closeRequest(requestId: number, requestEnd: RequestEnd): Observable<UserRequest> {
    const uri = `${Api.REQUEST_RESOURCE}/${requestId}/close`;
    return this.dataService.put<UserRequest>(uri, requestEnd);
  }
}