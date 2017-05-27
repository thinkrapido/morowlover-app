
import { Component, OnInit } from '@angular/core';
import { StreamService } from '../services/stream.service';

@Component({
  selector: 'current-playing',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
})
export class CurrentPlayingComponent implements OnInit {
  public title: string;
  public artist: string;

  constructor(private stream: StreamService) {}

  ngOnInit() {
    this.stream.getCurrent().subscribe(data => {
      this.title = data.title;
      this.artist = data.artist;
    })
  }

}