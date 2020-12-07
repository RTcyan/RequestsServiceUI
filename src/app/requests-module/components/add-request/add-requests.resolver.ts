import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, zip } from 'rxjs';
import { map } from 'rxjs/operators';

export interface AddRequestsData {

}

@Injectable({ providedIn: 'root' })
export class AddRequestsPageResolver implements Resolve<AddRequestsData> {
  public constructor(

  ) {
  }

  public resolve(route: ActivatedRouteSnapshot): Observable<AddRequestsData> {

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
