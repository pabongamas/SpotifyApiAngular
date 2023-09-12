import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { AuthSpotifyService } from '../../../../../services/auth-spotify.service';

@Component({
  selector: 'app-artists-top-tracks',
  templateUrl: './artists-top-tracks.component.html',
  styleUrls: ['./artists-top-tracks.component.scss']
})
export class ArtistsTopTracksComponent implements OnInit {
  constructor(
    private AuthSpotifyService:AuthSpotifyService
  ) { }
  @Input() topTracksByArtistData:any[]=[];
  @Input() pageArtist:boolean=false;


  ngOnInit(): void {
    console.log(this.topTracksByArtistData);
  }





}
