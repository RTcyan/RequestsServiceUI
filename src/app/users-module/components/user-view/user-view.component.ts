import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Route } from 'app/model-module/model/route/route';
import { RouteRatingWithRoute } from 'app/model-module/model/route/route-rating-with-route';
import { User } from 'app/model-module/model/user/user';
import { UserViewReslovedPageData } from './user-view.resolver';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {
  public user: User;

  public routes: Route[];

  public ratings: RouteRatingWithRoute[];

  public constructor(
    private route: ActivatedRoute,
  ) { }

  public ngOnInit() {
    this.route.data.subscribe((resolvedData: {data: UserViewReslovedPageData}) => {
      const { data } = resolvedData;
      this.user = data.user;
      this.routes = data.routes;
      this.ratings = data.ratings;
    })
  }

  public getAvarageRating(route: Route): number {
    return Math.round((route.ratings.reduce( ( p, c ) => p + c.mark, 0 ) / route.ratings.length) * 100) / 100;
   }

}
