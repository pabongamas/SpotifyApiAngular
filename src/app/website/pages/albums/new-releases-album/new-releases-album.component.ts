import { Component, OnInit,NgModule,Input,HostListener } from '@angular/core';
import { AuthSpotifyService } from '../../../../services/auth-spotify.service';

@Component({
  selector: 'app-new-releases-album',
  templateUrl: './new-releases-album.component.html',
  styleUrls: ['./new-releases-album.component.scss']
})
export class NewReleasesAlbumComponent implements OnInit {
  constructor(
    private AuthSpotifyService:AuthSpotifyService,
  ) { }
  newRealeses:any[]=[];
  offset=0;
  limit=40;
  totalElements:number=0;
  ngOnInit(): void {
   this.loadNewRealeses();
  }
  
loadNewRealeses(){
  this.AuthSpotifyService.newRealese(this.offset,this.limit).subscribe((data) => {
    this.newRealeses = this.newRealeses.concat(data.albums.items);
    this.offset += this.limit;
    this.totalElements=data.albums.total;
  });

}
loadMoreNewRealeses(){
 this.loadNewRealeses();
}

}
