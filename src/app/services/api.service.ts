
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import * as Rx from 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import _ from 'lodash';

@Injectable()
export class ApiService {

  private url: string = 'https://morow.com/history.json?size=11';

  private _ticker = null;

  constructor(private http: HttpClient) {
    this._ticker = Observable.interval(1000).share();
  }

  get ticker() {
    return this._ticker.share();
  }

  getHistory() {
    this.http.get(this.url)
          .map((data: HttpResponse<string>) => {
            console.log(data.body);
            return JSON.parse(data.body);
          })
          .do(val => { console.log(val); })
          ;
    return this.ticker
      .switchMap(() => { 
        return null;
      })
      .distinctUntilChanged((a, b) => _.isEqual(a, b))
      .do(val => console.log(val))
      .shareReplay(1)
      ;
  }

}
