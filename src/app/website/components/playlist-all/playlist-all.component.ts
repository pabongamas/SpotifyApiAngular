import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-playlist-all',
  templateUrl: './playlist-all.component.html',
  styleUrls: ['./playlist-all.component.scss']
})
export class PlaylistAllComponent {

  @Input() dataPlaylist:any;
}
