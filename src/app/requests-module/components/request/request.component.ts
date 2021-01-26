import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RequestStatus } from 'app/model-module/model/request/request-status';
import { UserRequest } from 'app/model-module/model/request/user-request';
import { RequestType } from 'app/model-module/model/requestType/request-type';
import { Subscription } from 'rxjs';
import { RequestPageData } from './request.resolver';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  private subscription = new Subscription();

  public request: UserRequest;

  private data: any;
 
  public requestForm = this.fb.group({
    reason: [''],
  });

  constructor(private route: ActivatedRoute, private fb: FormBuilder)  { }

  public ngOnInit(): void {
    this.subscription.add(this.route.data.subscribe((routeData) => {
      const pageData = routeData.data as RequestPageData;
      this.request = pageData.userRequest;
      this.data = JSON.parse(this.request.data);
      this.requestForm.controls['reason'].setValue(this.data.reason);

      console.log(pageData);
      
    }));
  }

  public getRequestStatusById(requestStatusId: number): string {
    return RequestStatus[requestStatusId];
  }
}
