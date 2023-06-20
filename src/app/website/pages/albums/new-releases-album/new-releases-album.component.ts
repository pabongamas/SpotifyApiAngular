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
  offset=0;
  limit=10;
  ngOnInit(): void {
    this.AuthSpotifyService.newRealese(this.offset,this.limit).subscribe((data) => {
          this.newRealeses = data.albums.items;
        });
  }
  

}
