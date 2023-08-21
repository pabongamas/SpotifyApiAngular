import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { AuthSpotifyService } from '../../../services/auth-spotify.service';
import { Router } from '@angular/router';
import { TokenAuthServiceService } from '../../../services/token-auth-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  @Output() cargarAlbumsClick: EventEmitter<void> = new EventEmitter<void>();
  tokenNav: string | null = null;
  profile: any | null = null;
  constructor(
    private AuthSpotifyService: AuthSpotifyService,
    private Router: Router,
    private TokenAuthServiceService: TokenAuthServiceService,
    private location: Location
  ) {
    this.hasToken();
    if (this.tokenNav) {
      this.loadProfile();
    }
  }
  onCargarAlbumsClick() {
    this.cargarAlbumsClick.emit();
  }
  authorizeWithSpotifyEvent() {
    this.AuthSpotifyService.authorizeWithSpotify();
  }
  hasToken() {
    this.tokenNav = this.TokenAuthServiceService.getToken();
  }

  logout() {
    this.TokenAuthServiceService.removeToken();
    this.location.go('/');
    location.reload();
  }
  loadProfile() {
    this.AuthSpotifyService.getCurrentUserProfile().subscribe(
      (data) => {
        this.profile = data;
        this.TokenAuthServiceService.saveIdUserLoggin(data.id);
      },
      (error) => {
        this.TokenAuthServiceService.removeToken();
        this.location.go('/');
        location.reload();
      }
    );
  }
}
