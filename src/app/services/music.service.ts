
import { Injectable } from '@angular/core';

@Injectable()
export class MusicService {

  private url = 'http://stream.fr.morow.com:8080/morow_med.mp3';
  private audio;
  public isPlaying: boolean = false;

  constructor() {
    this.audio = new Audio();
    this.audio.src = this.url;
    this.audio.load();
  }

  play() {
    this.audio.play();
    this.isPlaying = true;
  }

  pause() {
    this.audio.pause();
    this.isPlaying = false;
  }

  togglePlay() {
    if (!this.isPlaying) {
      this.play();
    }
    else {
      this.pause();
    }
  }
}
