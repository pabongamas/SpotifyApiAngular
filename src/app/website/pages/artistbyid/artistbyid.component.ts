import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { switchMap ,map,forkJoin,of } from 'rxjs';
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
  topTracksByArtistData:any=[];
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
          switchMap((albums) => {
            return forkJoin({
              artist: of(requestAlbumsByArtist),
              albums: of(albums),
              topTracks: this.AuthSpotifyService.getTopTracksXArtist(this.artistId)
            });
          })
        );
      })
     
    )
    .subscribe((data) => {
      this.artistByIdData = data.artist;
      this.albumsByArtistData=data.albums;
      this.totalElements=data.albums.total;
      this.topTracksByArtistData=data.topTracks.tracks;
    });

  }

}
