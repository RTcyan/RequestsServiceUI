import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { RequestRepository } from 'app/dao-module/repository/requests.repository';
import { UserRequest } from 'app/model-module/model/request/user-request';
import { Observable, zip } from 'rxjs';
import { map } from 'rxjs/operators';

export interface CurrentUserRequestsData {
  userRequests: UserRequest[];
}

@Injectable({ providedIn: 'root' })
export class CurrentUserRequestsPageResolver implements Resolve<CurrentUserRequestsData> {
  public constructor(
    private requestRepository: RequestRepository,
  ) {
  }

  public resolve(route: ActivatedRouteSnapshot): Observable<CurrentUserRequestsData> {
    return zip(
      this.requestRepository.getCurrentRequests(),
    ).pipe(
      map(([
        userRequests,
      ]) => ({
        userRequests,
      })),
    );
  }
}
