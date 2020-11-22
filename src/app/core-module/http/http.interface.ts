import { HttpHeaders, HttpParams } from '@angular/common/http';

export enum RequestType {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete'
}

export enum StatusCode {
  InternalServerError = 500
}

export interface HttpRequestParams<T = object> {
  path: string;
  body: T;
  headers: HttpHeaders;
  queryParams: HttpParams | {
    [param: string]: string | string[];
  },
}
