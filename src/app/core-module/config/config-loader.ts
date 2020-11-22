import { Injectable, APP_INITIALIZER } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export class Config {
  public host: string;
}

@Injectable()
export class ConfigLoader {

  private config: Partial<Config> = {};

  constructor(private http: HttpClient) { }

  public async load(path: string) {
    await this.http.get(path).pipe(
      tap((config) => { 
        this.config = config })
      ).toPromise();
  }

  public getConfig(): Partial<Config> {
    return this.config;
  }

}

export const appInitializerFn = (configLoader: ConfigLoader) => {
  return async () => await configLoader.load(`assets/config.json?time=${new Date().getTime()}`);
};

export const CONFIG_LOADER_PROVIDES = [
  ConfigLoader,
  { provide: APP_INITIALIZER, useFactory: appInitializerFn, multi: true, deps: [ConfigLoader] }
];