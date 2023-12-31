import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { TokenAuthServiceService} from '../../../services/token-auth-service.service'
import{AuthSpotifyService} from '../../../services/auth-spotify.service';

@Component({
  selector: 'app-app-auth-callback',
  templateUrl: './app-auth-callback.component.html',
  styleUrls: ['./app-auth-callback.component.scss']
})
export class AppAuthCallbackComponent implements OnInit {
  constructor(
    private TokenAuthServiceService:TokenAuthServiceService,
    private AuthSpotifyService:AuthSpotifyService
  ) { }

  ngOnInit(): void {
    const url = window.location.href;
    const accessToken = this.extractAccessTokenFromUrl(url);
    const tokenExpire = this.extractExpiresFromUrl(url);
    this.TokenAuthServiceService.saveToken(accessToken);
    this.TokenAuthServiceService.saveTokenExpire(tokenExpire);
    // Utiliza el token de acceso en tus solicitudes a la API de Spotify
    window.location.href = environment.domain+"/newRealeses"
  }

  private extractAccessTokenFromUrl(url: string): string {
    const accessTokenRegex = /access_token=([^&]+)/;
    const match = url.match(accessTokenRegex);
    return match ? match[1] : '';
  }

  private extractExpiresFromUrl(url: string): string {
    const accessTokenRegex = /expires_in=([^&]+)/;
    const match = url.match(accessTokenRegex);
    return match ? match[1] : '';
  }

}
