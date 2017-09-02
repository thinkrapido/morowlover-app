import { Component, OnInit } from '@angular/core';

import { StreamService } from './services/stream.service';
import { MusicService } from './services/music.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MusicService],
})
export class AppComponent implements OnInit {
  public title = 'MorowLover';
  public photo: string;

  constructor(public musicService: MusicService, public streamService: StreamService) {
    streamService.getCurrent()
      .subscribe(data => {
        this.photo = data.cover || 'https://morow.com/assets/img/logo@2x.png';
      });
  }

  ngOnInit() {
    this.musicService.play();
  }
}
