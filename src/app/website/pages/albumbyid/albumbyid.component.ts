import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { switchMap } from 'rxjs';
import { AuthSpotifyService } from '../../../services/auth-spotify.service';

@Component({
  selector: 'app-albumbyid',
  templateUrl: './albumbyid.component.html',
  styleUrls: ['./albumbyid.component.scss']
})
export class AlbumbyidComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private AuthSpotifyService:AuthSpotifyService
  ) { }
  albumId:string|null=null;
  albumByIdData:any=[];
  @Input() esAlbumForEach:any;
  @Input() album:any;

  ngOnInit(): void {
    if(!this.esAlbumForEach){
      this.loadAlbumByView();
    }else{
      this.AuthSpotifyService.getAlbumById(this.album.id)
      .subscribe((data) => {
        this.albumByIdData = data;
      });
    }
  }

  loadAlbumByView(){
    this.route.paramMap
    .pipe(
      switchMap((params) => {
        this.albumId = params.get('id');
        return this.AuthSpotifyService.getAlbumById(this.albumId);
      })
    )
    .subscribe((data) => {
      this.albumByIdData = data;
    });
  }

}
