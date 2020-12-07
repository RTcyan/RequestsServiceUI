import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-current-user-requests',
  templateUrl: './current-user-requests.component.html',
  styleUrls: ['./current-user-requests.component.scss']
})
export class CurrentUserRequestsComponent implements OnInit {

  public constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  public ngOnInit() {
  }

  public onRequestAddButtonClick() {
    this.router.navigate(['add'], {relativeTo: this.route})
  }

}
