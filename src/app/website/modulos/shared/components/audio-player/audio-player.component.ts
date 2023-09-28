import { Component,Input,Output,EventEmitter} from '@angular/core';
import { PlayerService } from './../../../../../services/player/player.service';
import {faPlay,faCompactDisc} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent {
  constructor(private audioPlayerService: PlayerService) {}
  @Input() trackUrl:string="";
  @Output() toggleHideNumberTrack: EventEmitter<void> = new EventEmitter<void>();
  faPlay = faPlay;
  faCompactDisc=faCompactDisc;
  isPlaying:boolean=false
  play() {
    this.audioPlayerService.playAudio(this.trackUrl);
    this.isPlaying=true;
  }

  pause() {
    this.audioPlayerService.pauseAudio();
    !this.isPlaying
  }

  stop() {
    this.audioPlayerService.stopAudio();
    !this.isPlaying
  }

}
