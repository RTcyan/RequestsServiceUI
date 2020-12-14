import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CurrentUserRequestsData } from './current-user-requests.resolver';

@Component({
  selector: 'app-current-user-requests',
  templateUrl: './current-user-requests.component.html',
  styleUrls: ['./current-user-requests.component.scss']
})
export class CurrentUserRequestsComponent implements OnInit {

  private subscription = new Subscription();

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription.add(this.route.data.subscribe((routeData) => {
      const pageData = routeData.data as CurrentUserRequestsData;
      console.log(pageData);
      
    }));

  }


}
