import { Routes } from "@angular/router";
import { RouteListComponent } from "./components/route-list/route-list.component";
import { RouteListResolver } from "./components/route-list/route-list.resolver";
import { RouteViewComponent } from "./components/route-view/route-view.component";
import { RouteViewResolver } from "./components/route-view/route-view.resolver";

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: RouteListComponent,
        resolve: {
          data: RouteListResolver,
        }
      }, 
      {
        path: ':routeId',
        component: RouteViewComponent,
        resolve: {
          data: RouteViewResolver,
        }
      }
    ]
  }
]