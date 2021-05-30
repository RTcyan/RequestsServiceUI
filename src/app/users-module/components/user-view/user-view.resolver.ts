import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Route } from "app/model-module/model/route/route";
import { RoutePoint } from "app/model-module/model/route/route-point";
import { RouteRating } from "app/model-module/model/route/route-rating";
import { RouteRatingWithRoute } from "app/model-module/model/route/route-rating-with-route";
import { User } from "app/model-module/model/user/user";
import { Observable, of, zip } from "rxjs";
import { map } from "rxjs/operators";

export interface UserViewReslovedPageData {
  user: User,
  routes: Route[],
  ratings: RouteRatingWithRoute[],
}

const getRandomNumber = (end: number, start = 0) => {
  const rand = start - 0.5 + Math.random() * (end - start + 1);
  return Math.round(rand);
}

const getRandomFloatNumber = (end: number, start = 0) => {
  const rand = start - 0.5 + Math.random() * (end - start + 1);
  return rand;
}


const logins = [
  'dominator', 'login', 'petrov', 'any211', 'gamerM',
]

const names = [
  'Иван', 'Петр', 'Максим', 'Марк', 'Боб', 'Джек',
]

const surnames = [
  'Дондон', 'Петров', 'Дмитренко', 'Вучич', 'Обэма', 'Ласковый',
]

const getUser = (): User => {
  const user: User = {
    id: getRandomNumber(100),
    isAdmin: false,
    path_to_img: '',
    login: logins[getRandomNumber(logins.length - 1)],
    name: names[getRandomNumber(names.length - 1)],
    surname: surnames[getRandomNumber(surnames.length - 1)],
  }
  return user;
}

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

const getRoutes = (user: User): Route[] => {
  const routeCount = getRandomNumber(5, 1);
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
    const ratingsCount = getRandomNumber(15,2);
    const ratings: RouteRating[] = [];
    for (let j = 0; j < ratingsCount; j++) {
      const rating: RouteRating = {
        comment: desciptions[getRandomNumber(desciptions.length - 1)],
        mark: getRandomNumber(5),
        user,
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

const getRatings = (user: User): RouteRatingWithRoute[] => {
  const ratingsCount = getRandomNumber(15,2);
  const ratings: RouteRatingWithRoute[] = [];
  for (let j = 0; j < ratingsCount; j++) {
    const rating: RouteRatingWithRoute = {
      comment: desciptions[getRandomNumber(desciptions.length - 1)],
      mark: getRandomNumber(5),
      routeId: getRandomNumber(100),
      user,
    }
    ratings.push(rating);
  }
  return ratings;
}

@Injectable({ providedIn: 'root' })
export class UserViewResolver implements Resolve<Observable<UserViewReslovedPageData>> {
  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserViewReslovedPageData> {
    const user = getUser();
    return zip(
      of(user),
      of(getRoutes(user)),
      of(getRatings(user)),
    ).pipe(
      map(([user, routes, ratings]) => {
        return {
          user,
          routes,
          ratings,
        } as UserViewReslovedPageData
      })
    )
  }
}