import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'app/model-module/model/user/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  public users: User[];

  public constructor(
    public route: ActivatedRoute,
  ) {
    
  }

  public ngOnInit() {
    this.route.data.subscribe((data) => {
      this.users = data.data;
    })
  }

}
