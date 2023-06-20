import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { switchMap } from 'rxjs';
import { AuthSpotifyService } from '../../../services/auth-spotify.service';

@Component({
  selector: 'app-artistbyid',
  templateUrl: './artistbyid.component.html',
  styleUrls: ['./artistbyid.component.scss']
})
export class ArtistbyidComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private AuthSpotifyService:AuthSpotifyService
  ) { }
  artistId:string|null=null;
  artistByIdData:any=[];

  ngOnInit(): void {
    this.route.paramMap
    .pipe(
      switchMap((params) => {
        this.artistId = params.get('id');
        return this.AuthSpotifyService.getArtistsById(this.artistId);
      })
    )
    .subscribe((data) => {
      this.artistByIdData = data;
    });
  }

}
