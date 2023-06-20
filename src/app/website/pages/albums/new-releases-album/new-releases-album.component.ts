import { Component, OnInit,NgModule,Input } from '@angular/core';
import { AuthSpotifyService } from '../../../../services/auth-spotify.service';

@Component({
  selector: 'app-new-releases-album',
  templateUrl: './new-releases-album.component.html',
  styleUrls: ['./new-releases-album.component.scss']
})
export class NewReleasesAlbumComponent implements OnInit {
  constructor(
    private AuthSpotifyService:AuthSpotifyService,
  ) { }
  newRealeses:[]=[];
  ngOnInit(): void {
    this.AuthSpotifyService.newRealese().subscribe((data) => {
          this.newRealeses = data.albums.items;
        });
  }
  

}
