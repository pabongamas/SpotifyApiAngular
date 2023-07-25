import { Component,OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { switchMap, map, forkJoin, of  } from 'rxjs';
import { AuthSpotifyService } from '../../../services/auth-spotify.service';

@Component({
  selector: 'app-top-artist-user-view',
  templateUrl: './top-artist-user-view.component.html',
  styleUrls: ['./top-artist-user-view.component.scss']
})
export class TopArtistUserViewComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private AuthSpotifyService:AuthSpotifyService
  ) { }
  limit:number=50;
  offset:number=0;
  userId:string|null="";
  time_range:string|null="";
  topArtistUser:{
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
        return this.AuthSpotifyService.getTopArtistByUser(parametros)
      }),
    )
    .subscribe((data) => {
      console.log(data);
      this.topArtistUser=data;
    });
  }
}
