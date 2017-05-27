
import { Component, OnInit } from '@angular/core';
import { StreamService } from '../services/stream.service';

@Component({
  selector: 'history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  public history = [];

  constructor(private stream: StreamService) {}

  ngOnInit() {
    this.stream.getHistory().subscribe(data => this.history = data);
  }

}