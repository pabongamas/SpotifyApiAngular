import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { switchMap, map, forkJoin, of  } from 'rxjs';
import { AuthSpotifyService } from '../../../services/auth-spotify.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private AuthSpotifyService:AuthSpotifyService
  ) { }
  userId:string|null=null;
  userByIdData:any|null=[];
  topTracksUser:{
    items:[]|any
  }={
    items:[]
  };
  limit:number=10;
  offset:number=0;
  topTracksUserTotal:number=0;

  ngOnInit(): void {
    console.log(this.userByIdData);
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
          return forkJoin({
            user: of(requestUser),
            topTracksUser: of(topTracksUser),
          });
        })
      )
    })
    )
    .subscribe((data) => {
      this.userByIdData = data.user;
      this.topTracksUser=data.topTracksUser;
      this.topTracksUserTotal=data.topTracksUser.total;
      this.offset+=this.limit;
    });
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
      console.log(this.topTracksUser.items)
      this.offset+=this.limit;
    })
    
  }
  goToProfile(url:string){
    window.open(url);
  }

}
