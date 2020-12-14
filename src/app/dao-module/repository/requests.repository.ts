import { Injectable } from '@angular/core';
import { DataService } from 'app/core-module/http/data.service';
import { UserRequest } from 'app/model-module/model/request/user-request';
import { RequestType } from 'app/model-module/model/requestType/request-type';
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
    const uri = `${Api.REQUEST_RESOURCE}`;
    return this.dataService.get<UserRequest[]>(uri);
  }
}