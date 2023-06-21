import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { switchMap ,map} from 'rxjs';
import { AuthSpotifyService } from '../../../services/auth-spotify.service';

@Component({
  selector: 'app-artistbyid',
  templateUrl: './artistbyid.component.html',
  styleUrls: ['./artistbyid.component.scss']
})
export class ArtistbyidComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private AuthSpotifyService:AuthSpotifyService
  ) { }
  artistId:string|null=null;
  artistByIdData:any=[];
  albumsByArtistData:any=[];
  totalElements:number=0;
  ngOnInit(): void {
    this.route.paramMap
    .pipe(
      switchMap((params) => {
        this.artistId = params.get('id');
        return this.AuthSpotifyService.getArtistsById(this.artistId);
      }),
      switchMap((requestAlbumsByArtist) => {
        return this.AuthSpotifyService.getAlbumsByArtistId(this.artistId).pipe(
          map((albums) => {
            return {
              artist: requestAlbumsByArtist,
              albums: albums
            };
          })
        );
      })
    )
    .subscribe((data) => {
      this.artistByIdData = data.artist;
      this.albumsByArtistData=data.albums;
      this.totalElements=data.albums.total;
    });

  }

}
