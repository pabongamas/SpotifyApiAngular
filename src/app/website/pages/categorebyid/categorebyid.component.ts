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
  playlistBydIdData:any={};
  // albumsByArtistData:any=[];
  // topTracksByArtistData:any=[];
  totalElements:number=0;
  offset=0;
  limit=21;
  ngOnInit(): void {
    this.route.paramMap
    .pipe(
      switchMap((params) => {
        this.categorieId = params.get('id');
        return this.AuthSpotifyService.getCategorieById(this.categorieId);
      }),
      switchMap((requestCategorieById) => {
        const parametros={
          "offset":this.offset,
          "limit":this.limit
      };
        return this.AuthSpotifyService.getPlaylistByCategorieId(this.categorieId,parametros).pipe(
          switchMap((playlists) => {
            return forkJoin({
              playlist: of(playlists),
              categorie: of(requestCategorieById),
            });
          })
        );
      })
    )
    .subscribe((data) => {
      this.playlistBydIdData = data.playlist.playlists;
      this.categorieByIdData=data.categorie;
      this.totalElements=this.playlistBydIdData.total;
    });
  }
  loadMorePlaylists(){
    this.offset += this.limit;
    const parametros={
      "offset":this.offset,
      "limit":this.limit
    };
    this.AuthSpotifyService.getPlaylistByCategorieId(this.categorieId,parametros).subscribe((data) => {
      this.playlistBydIdData.items = this.playlistBydIdData.items.concat(data.playlists.items);
      // this.totalElements=data.categories.total;
    }
    )
   }
}