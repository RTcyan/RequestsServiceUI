import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RequestRepository } from 'app/dao-module/repository/requests.repository';
import { RequestStatus } from 'app/model-module/model/request/request-status';
import { UserRequest } from 'app/model-module/model/request/user-request';
import { Subscription } from 'rxjs';
import { OperatorRequestPageData } from './operator-request.resolver';

@Component({
  selector: 'app-operator-request',
  templateUrl: './operator-request.component.html',
  styleUrls: ['./operator-request.component.scss']
})
export class OperatorRequestComponent implements OnInit, OnDestroy {

  private subscription = new Subscription();

  public request: UserRequest;

  private data: any;
 
  public requestForm = this.fb.group({
    reason: [''],
  });

  public operatorAnswerForm = this.fb.group({
    resultFileId: ['', Validators.required],
    operatorComment: [''],
  });

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private requestRepository: RequestRepository)  { }

  public ngOnInit(): void {
    this.subscription = this.route.data.subscribe((routeData) => {
      const pageData = routeData.data as OperatorRequestPageData;
      this.request = pageData.userRequest;
      this.data = JSON.parse(this.request.data);
      this.requestForm.controls['reason'].setValue(this.data.reason);

      console.log(pageData);
      
    });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public getRequestStatusById(requestStatusId: number): string {
    return RequestStatus[requestStatusId];
  }

  public onRequestInProgressButtonClick(): void {
    this.requestRepository.changeStatusInProgressOnRequest(this.request.id)
      .subscribe((request: UserRequest) => {
        console.log(request);
        this.request = request 
      });
  }

  public onRequestCloseButtonClick(): void {
    this.requestRepository.closeRequest(this.request.id, 
      {
        operatorComment: this.operatorAnswerForm.controls['operatorComment'].value,
        resultFileId: this.operatorAnswerForm.controls['resultFileId'].value,
      }
    ).subscribe((request: UserRequest) => {
      console.log(request);
      this.request = request 
    });
  }
}
