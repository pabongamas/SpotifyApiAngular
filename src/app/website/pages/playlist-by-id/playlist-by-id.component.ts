import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { switchMap } from 'rxjs';
import { AuthSpotifyService } from '../../../services/auth-spotify.service';

@Component({
  selector: 'app-playlist-by-id',
  templateUrl: './playlist-by-id.component.html',
  styleUrls: ['./playlist-by-id.component.scss']
})
export class PlaylistByIdComponent {
  constructor(
    private route:ActivatedRoute,
    private AuthSpotifyService:AuthSpotifyService
  ) { }
  playlistId:string|null=null;
  playlistByIdData:any=[];

  ngOnInit(): void {
    this.route.paramMap
    .pipe(
      switchMap((params) => {
        this.playlistId = params.get('id');
        return this.AuthSpotifyService.getPlaylistById(this.playlistId);
      })
    )
    .subscribe((data) => {
      this.playlistByIdData = data;
    });
  }

}
