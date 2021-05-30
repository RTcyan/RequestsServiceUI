import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";

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


const logins = [
  'dominator', 'login', 'petrov', 'any211', 'gamerM',
]

const names = [
  'Иван', 'Петр', 'Максим', 'Марк', 'Боб', 'Джек',
]

const surnames = [
  'Дондон', 'Петров', 'Дмитренко', 'Вучич', 'Обэма', 'Ласковый',
]

const getUsers = (): User[] => {
  const userCount = getRandomNumber(20, 5);
  const users: User[] = [];
  for (let i = 0; i < userCount; i++) {
    const user: User = {
      id: getRandomNumber(100),
      isAdmin: false,
      path_to_img: '',
      login: logins[getRandomNumber(logins.length - 1)],
      name: names[getRandomNumber(names.length - 1)],
      surname: surnames[getRandomNumber(surnames.length - 1)],
    }
    users.push(user);
  }
  return users;
}

@Injectable({ providedIn: 'root' })
export class UsersListResolver implements Resolve<Observable<User[]>> {
  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> {
    return of(getUsers());
  }
}