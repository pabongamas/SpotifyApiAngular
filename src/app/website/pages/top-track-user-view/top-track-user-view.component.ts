import { Component,OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { switchMap, map, forkJoin, of  } from 'rxjs';
import { AuthSpotifyService } from '../../../services/auth-spotify.service';

@Component({
  selector: 'app-top-track-user-view',
  templateUrl: './top-track-user-view.component.html',
  styleUrls: ['./top-track-user-view.component.scss']
})
export class TopTrackUserViewComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private AuthSpotifyService:AuthSpotifyService
  ) { }
  limit:number=50;
  offset:number=0;
  type:string="";
  userId:string|null="";
  time_range:string|null="";
  topTracksUser:{
    items:[]|any
  }={
    items:[]
  };
  ngOnInit(): void {
    this.route.paramMap
    .pipe(
      switchMap((params) => {
        console.log(params);
        this.userId = params.get('id');
        this.time_range=params.get('range');
        const parametros={
              "limit":this.limit,
              "offset":this.offset,
              "time_range":this.time_range,
            };
        return this.AuthSpotifyService.getTopTracksByUser(parametros)
      }),
    // switchMap((requestUser) => {
    //   const parametros={
    //     "limit":this.limit,
    //     "offset":this.offset,
    //     "time_range":"short_term",
    //   };
    //   return this.AuthSpotifyService.getTopTracksByUser(parametros)
    //   .pipe(
    //     switchMap((topTracksUser) => {
    //       return forkJoin({
    //         user: of(requestUser),
    //         topTracksUser: of(topTracksUser),
    //       });
    //     })
    //   )
    // })
    )
    .subscribe((data) => {
      console.log(data);
      // this.userByIdData = data.user;
      this.topTracksUser=data;
      // this.topTracksUserTotal=data.topTracksUser.total;
      // this.offset+=this.limit;
    });
  }

}
