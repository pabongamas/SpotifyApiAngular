import { Component, OnInit, Input, HostListener } from '@angular/core';
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
  dataArtist: any;
  artistId: string | null = null;
  type: string | null = null;
  albumsByArtistData: any = [];
  offset: number = 0;
  limit: number = 21;
  totalElements: number = 0;
  activeBadge: string = '';
  showOptionsDiscographyFlag: boolean = false;
  optionMenuActive: String|null= '';
  ngOnInit(): void {
    this.activeBadge = 'widgets';
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          this.artistId = params.get('id');
          this.type = params.get('type');
          if (this.type === 'popular') {
            this.type = 'album,single,appears_on,compilation';
          }
          const parametros = {
            include_groups: this.type,
            limit: this.limit,
            offset: this.offset,
          };
          return this.AuthSpotifyService.getAlbumsByArtistId(
            this.artistId,
            parametros
          );
        }),
        switchMap((requestALbum) => {
          const parametros = {
            include_groups: 'album',
            offset: 0,
            limit: 7,
          };
          return this.AuthSpotifyService.getArtistsById(this.artistId).pipe(
            switchMap((artista) => {
              return forkJoin({
                artist: of(artista),
                albums: of(requestALbum),
              });
            })
          );
        })
      )
      .subscribe((data) => {
        this.dataArtist = data.artist;
        this.albumsByArtistData = data.albums;
        this.totalElements = data.albums.total;
        this.offset += this.limit;
      });
    switch (this.type) {
      case 'single':
        this.optionMenuActive = 'Sencillos y EP';
        break;
      case 'album':
        this.optionMenuActive = 'Álbumes';
        break;
      case 'compilation':
        this.optionMenuActive = 'Recopilatorios';
        break;
      default:
        break;
    }
  }
  loadMoreAlbums() {
    const parametros = {
      include_groups: this.type,
      limit: this.limit,
      offset: this.offset,
    };
    this.AuthSpotifyService.getAlbumsByArtistId(
      this.artistId,
      parametros
    ).subscribe((data) => {
      console.log(data);
      this.albumsByArtistData.items = this.albumsByArtistData.items.concat(
        data.items
      );
      this.offset += this.limit;
    });
  }
  loadTypeWork(tipo: string) {
    this.activeBadge = tipo;
  }
  showOptionsDiscography() {
    this.showOptionsDiscographyFlag = !this.showOptionsDiscographyFlag;
  }
  switchOption(type: string) {
    console.log(type);
    this.offset=0;
    this.totalElements=0;
    if(type==='all'){
      this.optionMenuActive='Todos';
      this.type='album,single,appears_on,compilation';
    }else{
      this.type = type;
      if(this.type==='album'){
        this.optionMenuActive='Álbumes';
      }else if(this.type==='single'){
        this.optionMenuActive='Sencillos y EP';
      }else{
        this.optionMenuActive='Recopilatorios';
      }
    }
    
    const parametros = {
      include_groups: this.type,
      limit: this.limit,
      offset:this.offset
    };
    this.AuthSpotifyService.getAlbumsByArtistId(
      this.artistId,
      parametros
    ).subscribe((data) => {
      this.albumsByArtistData = data;
      this.totalElements = data.total;
      this.offset += this.limit;
    });
  }
}
