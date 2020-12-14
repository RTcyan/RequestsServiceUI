import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AddRequestsData } from './add-requests.resolver';

@Component({
  selector: 'app-add-requests',
  templateUrl: './add-requests.component.html',
  styleUrls: ['./add-requests.component.scss']
})
export class AddRequestsComponent implements OnInit {
  private subscription = new Subscription();

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription.add(this.route.data.subscribe((routeData) => {
      const pageData = routeData.data as AddRequestsData;
      console.log(pageData);
      
    }));

  }

}
