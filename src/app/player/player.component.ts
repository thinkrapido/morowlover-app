
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'music-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class MusicPlayerComponent {

  @Input() photo;
  @Input() paused;

  @Output() pauseplay = new EventEmitter();

}
