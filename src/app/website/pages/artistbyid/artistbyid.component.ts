import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, map, forkJoin, of } from 'rxjs';
import { AuthSpotifyService } from '../../../services/auth-spotify.service';

@Component({
  selector: 'app-artistbyid',
  templateUrl: './artistbyid.component.html',
  styleUrls: ['./artistbyid.component.scss'],
})
export class ArtistbyidComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private AuthSpotifyService: AuthSpotifyService
  ) {}
  artistId: string | null = null;
  artistByIdData: any = [];
  albumsByArtistData: any = [];
  topTracksByArtistData: any = [];
  totalElements: number = 0;
  activeButton: string = '';
  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          this.artistId = params.get('id');
          return this.AuthSpotifyService.getArtistsById(this.artistId);
        }),
        switchMap((requestAlbumsByArtist) => {
          const parametros = {
            include_groups: 'album',
            offset: 0,
            limit: 7,
          };
          return this.AuthSpotifyService.getAlbumsByArtistId(
            this.artistId,
            parametros
          ).pipe(
            switchMap((albums) => {
              return forkJoin({
                artist: of(requestAlbumsByArtist),
                albums: of(albums),
                topTracks: this.AuthSpotifyService.getTopTracksXArtist(
                  this.artistId
                ),
              });
            })
          );
        })
      )
      .subscribe((data) => {
        console.log(data.albums);
        this.activeButton='popular';
        this.artistByIdData = data.artist;
        this.albumsByArtistData = data.albums;
        this.totalElements = data.albums.total;
        this.topTracksByArtistData = data.topTracks.tracks;
      });
  }

  loadTypeWork(type: string) {
    this.activeButton = type;
    if(type==='popular'){
      type='album';
    }
    const parametros = {
      include_groups: type,
      offset: 0,
      limit: 7,
    };
    this.AuthSpotifyService.getAlbumsByArtistId(this.artistId, parametros)
    .subscribe((data) => {
      this.albumsByArtistData = data;
    });
  }
}
