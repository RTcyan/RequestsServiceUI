import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { RequestTypeRepository } from 'app/dao-module/repository/requestType.repository';
import { RequestType } from 'app/model-module/model/requestType/request-type';
import { Observable, zip } from 'rxjs';
import { map } from 'rxjs/operators';

export interface AddRequestsData {
  requestTypes: RequestType[];
}

@Injectable({ providedIn: 'root' })
export class AddRequestsPageResolver implements Resolve<AddRequestsData> {
  public constructor(
    private requestTypeRepository: RequestTypeRepository,
  ) {
  }

  public resolve(route: ActivatedRouteSnapshot): Observable<AddRequestsData> {

    return zip(
      this.requestTypeRepository.getRequestTypes()
    ).pipe(
      map(([
        requestTypes,
      ]) => ({
        requestTypes,
      })),
    );
  }
}
