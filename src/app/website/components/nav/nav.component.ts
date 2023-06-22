import { Component, OnInit,EventEmitter,Output,Input } from '@angular/core';
import{AuthSpotifyService} from '../../../services/auth-spotify.service';
import { Router } from '@angular/router';
import { TokenAuthServiceService} from '../../../services/token-auth-service.service'
import { Location } from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @Output() cargarAlbumsClick: EventEmitter<void> = new EventEmitter<void>();
  tokenNav:string|null=null;
  constructor(
    private AuthSpotifyService:AuthSpotifyService,
    private Router:Router,
    private TokenAuthServiceService:TokenAuthServiceService,
    private location: Location
  ) { 
    this.hasToken()
  }
  onCargarAlbumsClick() {
    this.cargarAlbumsClick.emit();
  }
  authorizeWithSpotifyEvent(){
    this.AuthSpotifyService.authorizeWithSpotify();
  }
  hasToken() {
    this.tokenNav= this.TokenAuthServiceService.getToken();
  }

  logout(){
    this.TokenAuthServiceService.removeToken();
    this.location.go('/');
    location.reload();
  }
}
