import { BehaviorSubject, Subscription } from 'rxjs';
import { Injectable, OnDestroy } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';

@Injectable({ providedIn: 'root' })
export class SecurityContextHolder implements OnDestroy {
  private subscriptions: Subscription = new Subscription();

  public user: BehaviorSubject<{id: number}> = new BehaviorSubject(null);

  public constructor(permissionsService: NgxPermissionsService) {
    this.subscriptions.add(this.user.asObservable().subscribe((user) => {
      // if (user) {
      //   permissionsService.loadPermissions(user.roles);
      // }
    }));
  }

  // TODO: eslint
  // eslint-disable-next-line class-methods-use-this
  public getAuthToken(): string {
    const token = localStorage.getItem('jwt_token');
    if (token && token.length > 0) {
      return `Bearer ${token}`;
    }
    return null;
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
