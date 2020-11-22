import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserDetail } from '@model/model/authority/user-detail';

@Injectable({ providedIn: 'root' })
export class SecurityContextHolder {
  public user: BehaviorSubject<UserDetail> = new BehaviorSubject(null);
  constructor() { }
}