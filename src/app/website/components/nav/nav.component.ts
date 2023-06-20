import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import{AuthSpotifyService} from '../../../services/auth-spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  token='';
  @Output() cargarAlbumsClick: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private AuthSpotifyService:AuthSpotifyService,
    private Router:Router,
  ) { }
  onCargarAlbumsClick() {
    this.cargarAlbumsClick.emit();
  }
  login(){
    // console.log("aca entra" );
    // this.AuthSpotifyService.Authorization()
    // .subscribe(()=>{
    //   this.Router.navigate(['/profile']);
    // });
  }
}
