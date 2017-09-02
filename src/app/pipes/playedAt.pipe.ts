
import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment';

@Pipe({ name: 'playedAt' })
export class TimeTransformer implements PipeTransform {
  transform(timestamp: number) {
    let ts = moment.unix(timestamp);
    return ts.format('HH:mm');
  }
}
