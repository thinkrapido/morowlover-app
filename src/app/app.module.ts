import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MusicPlayerComponent } from './player/player.component';
import { CurrentPlayingComponent } from './artist/artist.component';
import { HistoryComponent } from './artist/history.component';

import { PlayedAtPipe } from './pipes/playedAt.pipe';

import { ApiService } from './services/api.service';
import { StreamService } from './services/stream.service';
import { MusicService } from './services/music.service';

@NgModule({
  declarations: [
    AppComponent,
    MusicPlayerComponent,
    CurrentPlayingComponent,
    HistoryComponent,
    PlayedAtPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  exports: [
    MusicPlayerComponent,
    CurrentPlayingComponent,
    HistoryComponent,
  ],
  providers: [
    ApiService,
    StreamService,
    MusicService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
