import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { RequestRepository } from 'app/dao-module/repository/requests.repository';
import { AuthUser } from 'app/model-module/model/auth-user/AuthUser';
import { UserRequest } from 'app/model-module/model/request/user-request';
import { SecurityContextHolder } from 'app/security-module/context/security-context-holder';
import { Observable, zip } from 'rxjs';
import { map } from 'rxjs/operators';

export interface OperatorRequestsData {
  userRequests: UserRequest[];
}

@Injectable({ providedIn: 'root' })
export class OperatorRequestsPageResolver implements Resolve<OperatorRequestsData> {
  public constructor(
    private context: SecurityContextHolder,
    private requestRepository: RequestRepository,
  ) {
  }

  public resolve(route: ActivatedRouteSnapshot): Observable<OperatorRequestsData> {
    let depId: number;
    this.context.user.subscribe((user: AuthUser) => {
      if(user) {
        depId = user.employee.operator.department.id;
      }
    });
    return zip(
      this.requestRepository.getRequestsByDepId(depId),
    ).pipe(
      map(([
        userRequests,
      ]) => ({
        userRequests,
      })),
    );
  }
}
