
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import * as Rx from 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { TimeTransformer } from '../pipes/playedAt.pipe';
import _ from 'lodash';

@Injectable()
export class StreamService {

  private timeTransformer = new TimeTransformer();

  constructor(private api: ApiService) {}

  getHistory() {
    return this.api.ticker
      .switchMap(() => this.api.getHistory())
      .map(history => {
        history.shift();
        return history;
      })
      ;
  }

  getCurrent() {
    return this.api.ticker
      .switchMap(() => this.api.getHistory())
      .map(history => !!history.length ? history[0] : {})
      .do(val => console.log(val))
      ;
  }

  getPlayTime() {
    return Rx.Observable
      .zip(this.api.ticker, this.getCurrent())
      .do(val => console.log(val))
      .map(tuple => {
        const current: any = tuple[1];
        if (_.isEqual(current, {})) return {};
        const started = +(current.playedAt) * 1000,
              played = (new Date()).getTime() - started,
              duration = +(current.duration) * 1000,
              end = started + duration,
              rest = end - played
              ;
              console.log(started, rest)
        return {
          started: this.timeTransformer.transform(started),
          rest: this.timeTransformer.transform(rest)
        };
      })
      .shareReplay(1)
      ;
  }

}
