import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Route } from "app/model-module/model/route/route";
import { RoutePoint } from "app/model-module/model/route/route-point";
import { RouteRating } from "app/model-module/model/route/route-rating";
import { User } from "app/model-module/model/user/user";
import { Observable, of } from "rxjs";

const getRandomNumber = (end: number, start = 0) => {
  const rand = start - 0.5 + Math.random() * (end - start + 1);
  return Math.round(rand);
}

const getRandomFloatNumber = (end: number, start = 0) => {
  const rand = start - 0.5 + Math.random() * (end - start + 1);
  return rand;
}

const users: User[] = [
  {
    id: 1,
    isAdmin: false,
    login: 'login1',
    name: 'Вася',
    path_to_img: '',
    surname: 'Масляков'
  },
  {
    id: 2,
    isAdmin: false,
    login: 'login2',
    name: 'Петр',
    path_to_img: '',
    surname: 'Зябкин'
  }
]

const desciptions = [
  'Описание 1', 'Описание 2', 'Описание 3', 'Описание 4',
]

const nameRoute = [
  'Маршрут1', 'Маршрут2', 'Маршрут3', 'Маршрут4',
]

const names1 = [
  'Классное', 'Крутое', 'Замечательное', 'Великолепное',
]

const names2 = [
  'место отдыха', 'кафе', 'граффити', 'место развлечений',
]

const getRoutes = (): Route[] => {
  const routeCount = getRandomNumber(10, 1);
  const routes: Route[] = []
  for (let i = 0; i < routeCount; i++) {
    const pointCount = getRandomNumber(5, 3);
    const points: RoutePoint[] = []
    for(let j = 0; j < pointCount; j++) {
      const pointName = `${names1[getRandomNumber(names1.length - 1)]} ${names2[getRandomNumber(names2.length - 1)]}`;
      const pointDescr = desciptions[getRandomNumber(desciptions.length - 1)];
      const point: RoutePoint = {
        id: i * routeCount + j,
        description: pointDescr,
        name: pointName,
        path_to_img: '',
        latLng: {
          lat: getRandomFloatNumber(46.368, 46.34),
          lng: getRandomFloatNumber(48.055, 48.031),
        },
      };
      points.push(point);
    }
    const userIndex = getRandomNumber(users.length - 1);
    const user = users[userIndex];
    const ratingsCount = getRandomNumber(15,2);
    const ratings: RouteRating[] = [];
    for (let j = 0; j < ratingsCount; j++) {
      const rating: RouteRating = {
        comment: desciptions[getRandomNumber(desciptions.length - 1)],
        mark: getRandomNumber(5),
        user: users[userIndex == 1 ? 0 : 1],
      }
      ratings.push(rating);
    }
    
    routes.push({
      id: i,
      isHide: !!getRandomNumber(1),
      creator: user,
      description: desciptions[getRandomNumber(desciptions.length - 1)],
      name: nameRoute[getRandomNumber(nameRoute.length - 1)],
      path_to_img: '',
      points,
      ratings,
    });
  }
  return routes;
}

@Injectable({ providedIn: 'root' })
export class RouteListResolver implements Resolve<Observable<Route[]>> {
  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Route[]> {
    return of(getRoutes());
  }
}