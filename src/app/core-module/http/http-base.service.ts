import { Injector } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { HttpRequestParams, RequestType } from './http.interface';
import { ConfigLoader } from '../config/config-loader';
import { catchError } from 'rxjs/operators';



export abstract class HttpBase {

  protected http: HttpClient;

  public readonly host: string;

  protected constructor(context: Injector) {
    this.http = context.get(HttpClient);
    this.host = context.get(ConfigLoader).getConfig().host;
  }

  public abstract request<T>(
    method: string,
    params: HttpRequestParams,
    responseEntity?: boolean): Observable<T>;

  public get<T>(
    path: string,
    headers: HttpHeaders = null,
    queryParams?: HttpParams | {
      [param: string]: string | string[];
    },
    responseEntity?: boolean): Observable<T> {
    return this.request<T>(RequestType.GET, { path, body: {}, headers, queryParams }, responseEntity);
  }

  public post<T>(
    path: string,
    body: any = {},
    headers: HttpHeaders = null,
    queryParams?: HttpParams | {
      [param: string]: string | string[];
    },
    responseEntity?: boolean): Observable<T> {
    return this.request<T>(RequestType.POST, { path, body: body, headers, queryParams }, responseEntity);
  }

  public put<T>(
    path: string,
    body: any = {},
    headers: HttpHeaders = null,
    queryParams?: HttpParams | {
      [param: string]: string | string[];
    },
    responseEntity?: boolean): Observable<T> {
    return this.request<T>(RequestType.PUT, { path, body: body, headers, queryParams }, responseEntity);
  }

  public delete<T>(
    path: string,
    headers: HttpHeaders = null,
    queryParams?: HttpParams | {
      [param: string]: string | string[];
    },
    responseEntity?: boolean): Observable<T> {
    return this.request<T>(RequestType.DELETE, { path, body: {}, headers, queryParams }, responseEntity);
  }

}
