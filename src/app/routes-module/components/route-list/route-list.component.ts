import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Route } from 'app/model-module/model/route/route';
import { routes } from 'app/routes-module/routes.routing';

@Component({
  selector: 'app-route-list',
  templateUrl: './route-list.component.html',
  styleUrls: ['./route-list.component.scss']
})
export class RouteListComponent implements OnInit {

  public routes: Route[];

  public constructor(
    private route: ActivatedRoute,
  ) { }

  public getAvarageRating(route: Route): number {
   return Math.round((route.ratings.reduce( ( p, c ) => p + c.mark, 0 ) / route.ratings.length) * 100) / 100;
  }

  public ngOnInit() {
    this.route.data.subscribe((data) => {
      this.routes = data.data;
    })
  }

}
