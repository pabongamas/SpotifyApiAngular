import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { switchMap, map, forkJoin, of  } from 'rxjs';
import { AuthSpotifyService } from '../../../services/auth-spotify.service';
import { TokenAuthServiceService } from '../../../services/token-auth-service.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private AuthSpotifyService:AuthSpotifyService,
    private TokenAuthServiceService:TokenAuthServiceService
  ) { }
  userId:string|null=null;
  userByIdData:any|null=[];
  topTracksUser:{
    items:[]|any
  }={
    items:[]
  };
  topArtistUser:{
    items:[]|any
  }={
    items:[]
  };
  playlistUser:{
    items:[]|any
  }={
    items:[]
  };
  limit:number=5;
  offset:number=0;
  limitArtist:number=7;
  offsetArtist:number=0;
  topTracksUserTotal:number=0;
  topArtistsUserTotal:number=0;
  limitPlaylist:number=7;
  offsetPlaylist:number=0;
  idUserLogin:string|null|undefined=null;
  ngOnInit(): void {
    this.route.paramMap
    .pipe(
      switchMap((params) => {
        this.userId = params.get('id');
        return this.AuthSpotifyService.getProfileUser(this.userId);
      }),
      switchMap((requestUser) => {
      const parametros={
        "limit":this.limit,
        "offset":this.offset,
        "time_range":"short_term",
      };
      return this.AuthSpotifyService.getTopTracksByUser(parametros)
      .pipe(
        switchMap((topTracksUser) => {
          const parametros={
            "limit":this.limitArtist,
            "offset":this.offsetArtist,
            "time_range":"short_term",
          };
          return this.AuthSpotifyService.getTopArtistByUser(parametros)
          .pipe(
            switchMap((topArtistUser) => {

              const parametros={
                "limit":this.limitPlaylist,
                "offset":this.offsetPlaylist,
              };
              return this.AuthSpotifyService.getPlaylistByUser(this.userId,parametros)
              .pipe(
                switchMap((playlistsByUser) => {
                   return forkJoin({
                     user: of(requestUser),
                     topTracksUser: of(topTracksUser),
                     topArtistUser: of(topArtistUser),
                     playlistsByUser:of(playlistsByUser)
                   });
                }));
            })
          )
        })
      );

    }),
    )
    .subscribe((data) => {
      this.userByIdData = data.user;
      this.topTracksUser=data.topTracksUser;
      this.topArtistUser=data.topArtistUser;
      this.topTracksUserTotal=data.topTracksUser.total;
      this.topArtistsUserTotal=data.topArtistUser.total;
      this.offset+=this.limit;
      this.offsetArtist+=this.limitArtist;
      this.playlistUser=data.playlistsByUser;
    });
    this.idUserLogin=this.TokenAuthServiceService.getIdUserLoggin();
  }
  loadMoreTracksByUser(){
    const parametros={
      "limit":this.limit,
      "offset":this.offset,
      "time_range":"short_term",
    };
    this.AuthSpotifyService.getTopTracksByUser(parametros)
    .subscribe((data)=>{
      this.topTracksUser.items=this.topTracksUser.items.concat(data.items);
      this.offset+=this.limit;
    })

  }
  loadMoreArtistByUser(){
    const parametros={
      "limit":this.limitArtist,
      "offset":this.offsetArtist,
      "time_range":"short_term",
    };
    this.AuthSpotifyService.getTopArtistByUser(parametros)
    .subscribe((data)=>{
      this.topArtistUser.items=this.topArtistUser.items.concat(data.items);
      this.offsetArtist+=this.limitArtist;
    })

  }
  goToProfile(url:string){
    window.open(url);
  }

}
