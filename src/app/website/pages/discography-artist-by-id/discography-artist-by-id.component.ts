import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, map, forkJoin, of } from 'rxjs';
import { AuthSpotifyService } from '../../../services/auth-spotify.service';

@Component({
  selector: 'app-discography-artist-by-id',
  templateUrl: './discography-artist-by-id.component.html',
  styleUrls: ['./discography-artist-by-id.component.scss'],
})
export class DiscographyArtistByIDComponent {
  constructor(
    private route: ActivatedRoute,
    private AuthSpotifyService: AuthSpotifyService
  ) {}
  artistId: string | null = null;
  type: string | null = null;
  albumsByArtistData: any = [];
  offset:number=0;
  limit:number=21;
  totalElements: number = 0;

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          this.artistId = params.get('id');
          this.type = params.get('type');
          if(this.type==='popular'){
            this.type='album';
          }
          const parametros = {
            include_groups: this.type,
            limit:this.limit,
            offset:this.offset
          };
          return this.AuthSpotifyService.getAlbumsByArtistId(
            this.artistId,
            parametros
          );
        })
      )
      .subscribe((data) => {
        this.albumsByArtistData = data;
        this.totalElements=data.total;
        this.offset+=this.limit;
      });
  }
  loadMoreAlbums(){
    const parametros = {
      include_groups: this.type,
      limit:this.limit,
      offset:this.offset
    };
    this.AuthSpotifyService.getAlbumsByArtistId(this.artistId, parametros)
    .subscribe((data) => {
      this.albumsByArtistData.items = this.albumsByArtistData.items.concat(data.items);
      this.offset += this.limit;
    });
  }
}
