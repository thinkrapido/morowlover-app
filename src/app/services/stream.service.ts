
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import _ from 'lodash';

@Injectable()
export class StreamService {

  private history = [];

  constructor(private api: ApiService) {

    Observable.interval(1000)
      .switchMap(() => api.getHistory())
      .subscribe(data => {
        this.history = data;
      });

  }

  getCurrent() {
    return Observable.interval(1000)
      .map(() => !!this.history.length ? this.history[0] : {})
      .distinctUntilChanged()
      ;
  }

  getHistory() {
    return Observable.interval(1000)
      .map(() => {
        let list = _.clone(this.history);
        list.shift();
        return list;
      })
      .distinctUntilChanged()
      ;
  }

}