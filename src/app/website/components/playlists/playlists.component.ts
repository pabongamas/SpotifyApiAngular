import { Component,Input,Output,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent {
  @Input() playlists:any;
  @Input() totalElements:any;
  @Output() eventEmitPlaylists: EventEmitter<any> = new EventEmitter();

 

  loadMorePlaylists() {
    this.eventEmitPlaylists.emit();
  }
}



