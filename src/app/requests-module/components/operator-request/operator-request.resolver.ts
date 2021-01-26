import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { RequestRepository } from 'app/dao-module/repository/requests.repository';
import { RequestTypeRepository } from 'app/dao-module/repository/requestType.repository';
import { UserRequest } from 'app/model-module/model/request/user-request';
import { Observable, zip } from 'rxjs';
import { map } from 'rxjs/operators';

export interface OperatorRequestPageData {
  userRequest: UserRequest;
}

@Injectable({ providedIn: 'root' })
export class OperatorRequestPageResolver implements Resolve<OperatorRequestPageData> {
  public constructor(
    private requestRepository: RequestRepository,
    private requestTypeRepository: RequestTypeRepository,
    private route: ActivatedRoute,
  ) {
  }

  public resolve(route: ActivatedRouteSnapshot): Observable<OperatorRequestPageData> {
    return zip(
      this.requestRepository.getRequestById(route.params.id),
    ).pipe(
      map(([
        userRequest,
      ]) => ({
        userRequest,
      })),
    );
  }
}
