import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigLoader } from '../config/config-loader';
import { HttpBase } from './http-base.service';
import { HttpRequestParams } from './http.interface';


@Injectable({ providedIn: 'root' })
export class DataService extends HttpBase {

  constructor(context: Injector, protected configLoader: ConfigLoader) {
    super(context);
  }

  public static createFormData(params: object): FormData | string {
    return Object.keys(params).map((key) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
    }).join('&');
  }

  public request<T>(
    method: string,
    { path, body, headers, queryParams }: HttpRequestParams,
    responseEntity?: boolean): Observable<T> {
    if (path.indexOf('/') !== 0) {
      path = '/' + path;
    }
    const url = `${this.host}${path}`;
    let request: Object = { body, headers, params: queryParams, withCredentials: true };
    if (responseEntity) {
      request['observe'] = 'response';
    }
    return this.http.request<T>(method, url, request);
  }

}
