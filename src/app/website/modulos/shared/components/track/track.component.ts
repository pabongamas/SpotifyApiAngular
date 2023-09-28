import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {
  @Input() track:any;
  @Input() esPlaylist:boolean=false;
  @Input() isTrackByUser:boolean=false;
  @Input() indexTrack:number|null|any=null;
  @Input() tracksInViewArtist:boolean=false;
  @Input() loadedTracksByAlbum:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

}
