import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestRepository } from 'app/dao-module/repository/requests.repository';
import { NewUserRequest } from 'app/model-module/model/request/new-user-request';
import { RequestType } from 'app/model-module/model/requestType/request-type';
import { Subscription } from 'rxjs';
import { AddRequestsData } from './add-requests.resolver';

@Component({
  selector: 'app-add-requests',
  templateUrl: './add-requests.component.html',
  styleUrls: ['./add-requests.component.scss']
})
export class AddRequestsComponent implements OnInit {
  private subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private requestRepository: RequestRepository,
    private router: Router,
  ) { }

  public requestTypes: RequestType[];

  public addRequestForm = this.fb.group({
    typeId: ['', Validators.required],
    reason: ['', Validators.required],
    userComment: [''],
  });

  public ngOnInit() {
    this.subscription.add(this.route.data.subscribe((routeData) => {
      const pageData = routeData.data as AddRequestsData;
      this.requestTypes = pageData.requestTypes;
      
    }));

  }

  public onEnterButtonClick() {
    let data = { reason: this.addRequestForm.controls['reason'].value }

    let request: NewUserRequest = {
      typeId: this.addRequestForm.controls['typeId'].value,
      userComment: this.addRequestForm.controls['userComment'].value,
      data: JSON.stringify(data),
    }

    this.requestRepository.addNewRequest(request).subscribe(() => {
      this.router.navigate(['../'], { relativeTo: this.route });
    })
  }

}
