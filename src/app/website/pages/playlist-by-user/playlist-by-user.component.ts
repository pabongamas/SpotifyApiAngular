import { Component,OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { switchMap, map, forkJoin, of  } from 'rxjs';
import { AuthSpotifyService } from '../../../services/auth-spotify.service';
import { playlistsByUserModel } from '../../models/playlistByUser.model';
import { DataSourcePlaylistByUser } from './data-source';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-playlist-by-user',
  templateUrl: './playlist-by-user.component.html',
  styleUrls: ['./playlist-by-user.component.scss']
})
export class PlaylistByUserComponent implements OnInit {
  constructor(
    private route:ActivatedRoute,
    private AuthSpotifyService:AuthSpotifyService
  ){}
  dataSource = new DataSourcePlaylistByUser();
  dataOriginal=[];
  input = new FormControl('', { nonNullable: true })
  limit:number=50;
  offset:number=0;
  userId:string|null="";
  playlistsByUser:{
    items:[]|any
  }={
    items:[]
  };
  ngOnInit(): void {
    this.route.paramMap
    .pipe(
      switchMap((params) => {
        this.userId = params.get('id');
        const parametros={
              "limit":this.limit,
              "offset":this.offset,
            };
        return this.AuthSpotifyService.getPlaylistByUser(this.userId,parametros);
      }),
    )
    .subscribe((data) => {
      this.dataOriginal=data.items;
      this.dataSource.init(this.dataOriginal);
    });
    this.input.valueChanges
    .pipe(
      debounceTime(300)
    )
    .subscribe(value => {
      this.dataSource.findPlaylists(value);
    });
  }
 
}
