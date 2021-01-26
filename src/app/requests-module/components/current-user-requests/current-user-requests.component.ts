import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestStatus } from 'app/model-module/model/request/request-status';
import { UserRequest } from 'app/model-module/model/request/user-request';
import { RequestType } from 'app/model-module/model/requestType/request-type';
import { Subscription } from 'rxjs';
import { CurrentUserRequestsData } from './current-user-requests.resolver';

@Component({
  selector: 'app-current-user-requests',
  templateUrl: './current-user-requests.component.html',
  styleUrls: ['./current-user-requests.component.scss']
})
export class CurrentUserRequestsComponent implements OnInit {

  private subscription = new Subscription();

  public requests: UserRequest[];

  constructor(private route: ActivatedRoute) { }

  public ngOnInit(): void {
    this.subscription.add(this.route.data.subscribe((routeData) => {
      const pageData = routeData.data as CurrentUserRequestsData;
      this.requests = pageData.userRequests;
    }));
  }

  public getRequestStatusById(requestStatusId: number): string {
    return RequestStatus[requestStatusId];
  }
}
