import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { switchMap ,map,forkJoin,of } from 'rxjs';
import { AuthSpotifyService } from '../../../services/auth-spotify.service';

@Component({
  selector: 'app-categorebyid',
  templateUrl: './categorebyid.component.html',
  styleUrls: ['./categorebyid.component.scss']
})
export class CategorebyidComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private AuthSpotifyService:AuthSpotifyService
  ) { }

  categorieId:string|null=null;
  categorieByIdData:any=[];
  // albumsByArtistData:any=[];
  // topTracksByArtistData:any=[];
  totalElements:number=0;
  ngOnInit(): void {
    this.route.paramMap
    .pipe(
      switchMap((params) => {
        this.categorieId = params.get('id');
        return this.AuthSpotifyService.getCategorieById(this.categorieId);
      }),
      // switchMap((requestAlbumsByArtist) => {
      //   const parametros={
      //     "include_groups":"album,single",
      //     "offset":0,
      //     "limit":7
      // };
      //   return this.AuthSpotifyService.getAlbumsByArtistId(this.artistId,parametros).pipe(
      //     switchMap((albums) => {
      //       return forkJoin({
      //         artist: of(requestAlbumsByArtist),
      //         albums: of(albums),
      //         topTracks: this.AuthSpotifyService.getTopTracksXArtist(this.artistId)
      //       });
      //     })
      //   );
      // })
     
    )
    .subscribe((data) => {
      // this.artistByIdData = data.artist;
      this.categorieByIdData=data;
      // this.totalElements=data.albums.total;
      // this.topTracksByArtistData=data.topTracks.tracks;
    });

  }
}