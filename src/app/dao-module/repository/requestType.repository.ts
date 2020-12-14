import { Injectable } from '@angular/core';
import { DataService } from 'app/core-module/http/data.service';
import { RequestType } from 'app/model-module/model/requestType/request-type';
import { Observable } from 'rxjs';

export enum Api {
  REQUEST_TYPE_RESOURCE = '/api/requestType'
}

/**
 * Provides resources for working with faculties
 */
@Injectable({ providedIn: "root" })
export class RequestTypeRepository {

  constructor(private dataService: DataService) { }

  /**
   * Returns faculties
   */
  public getRequestTypes(): Observable<RequestType[]> { 
    const uri = `${Api.REQUEST_TYPE_RESOURCE}`;
    return this.dataService.get<RequestType[]>(uri);
  }
}