import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-playlist-all',
  templateUrl: './playlist-all.component.html',
  styleUrls: ['./playlist-all.component.scss']
})
export class PlaylistAllComponent {

  @Input() dataPlaylist:any;
  @Input() totalElements:any;
  @Input() isDataSource:boolean=false;
  @Output() eventEmitPlaylistsAll: EventEmitter<any> = new EventEmitter();


  loadMorePlaylists(){
    this.eventEmitPlaylistsAll.emit();
  }


}
