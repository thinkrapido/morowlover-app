
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ApiService {

  private url: string = 'https://morow.com/history.json?size=11';

  constructor(private http: Http) {}

  getHistory() {
    return this.http.get(this.url).map(data => data.json());
  }

}