import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestStatus } from 'app/model-module/model/request/request-status';
import { UserRequest } from 'app/model-module/model/request/user-request';
import { Subscription } from 'rxjs';
import { OperatorRequestsData } from './operator-requests.resolver';

@Component({
  selector: 'app-operator-requests',
  templateUrl: './operator-requests.component.html',
  styleUrls: ['./operator-requests.component.scss']
})
export class OperatorRequestsComponent implements OnInit {

  private subscription = new Subscription();

  public requests: UserRequest[];

  constructor(private route: ActivatedRoute) { }

  public ngOnInit(): void {
    this.subscription.add(this.route.data.subscribe((routeData) => {
      const pageData = routeData.data as OperatorRequestsData;
      this.requests = pageData.userRequests;
      console.log(this.requests);
      
    }));
  }

  public getRequestStatusById(requestStatusId: number): string {
    return RequestStatus[requestStatusId];
  }
}
