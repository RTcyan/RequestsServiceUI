import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, zip } from 'rxjs';
import { map } from 'rxjs/operators';

export interface CurrentUserRequestsData {

}

@Injectable({ providedIn: 'root' })
export class CurrentUserRequestsPageResolver implements Resolve<CurrentUserRequestsData> {
  public constructor(

  ) {
  }

  public resolve(route: ActivatedRouteSnapshot): Observable<CurrentUserRequestsData> {

    const hello = ''

    return zip(

    ).pipe(
      map(([
        hello,
      ]) => ({
        hello,
      })),
    );
  }
}
