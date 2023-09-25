import { Component, OnInit,NgModule,Input,HostListener } from '@angular/core';
import { AuthSpotifyService } from '../../../services/auth-spotify.service';
import { TokenAuthServiceService } from '../../../services/token-auth-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-releases-album',
  templateUrl: './new-releases-album.component.html',
  styleUrls: ['./new-releases-album.component.scss']
})
export class NewReleasesAlbumComponent implements OnInit {
  constructor(
    private AuthSpotifyService:AuthSpotifyService,
    private TokenAuthServiceService:TokenAuthServiceService,
    private location: Location
  ) { }
  newRealeses:any[]=[];
  offset=0;
  limit=50;
  totalElements:number=0;
  ngOnInit(): void {
  if(this.TokenAuthServiceService.getToken()!==null){
   this.loadNewRealeses();
  }
  }

loadNewRealeses(){
  this.AuthSpotifyService.newRealese(this.offset,this.limit).subscribe((data) => {
    this.newRealeses = this.newRealeses.concat(data.albums.items);
    this.offset += this.limit;
    this.totalElements=data.albums.total;
  },
  (error) => {
    this.TokenAuthServiceService.removeToken();
  }
  )

}
loadMoreNewRealeses(){
 this.loadNewRealeses();
}

}
