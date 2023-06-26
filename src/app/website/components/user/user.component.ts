import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { switchMap } from 'rxjs';
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

  ngOnInit(): void {
    console.log(this.userByIdData);
    this.route.paramMap
    .pipe(
      switchMap((params) => {
        this.userId = params.get('id');
        return this.AuthSpotifyService.getProfileUser(this.userId);
      }),
    // switchMap((requestTopTracks) => {
    //   const parametros={
    //     "limit":10,
    //     "time_range":"short_term",
      
    // };
    //   return this.AuthSpotifyService.getTopTracksByUser(parametros)
    //   .pipe()
    // })
    )
    .subscribe((data) => {
      this.userByIdData = data;
    });
  }
  goToProfile(url:string){
    window.open(url);
  }

}
