import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-app-auth-callback',
  templateUrl: './app-auth-callback.component.html',
  styleUrls: ['./app-auth-callback.component.scss']
})
export class AppAuthCallbackComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const url = window.location.href;
    const accessToken = this.extractAccessTokenFromUrl(url);
    
    // Utiliza el token de acceso en tus solicitudes a la API de Spotify
    localStorage.setItem('accessToken', accessToken);
    window.location.href = environment.domain+"/home"
  }

  private extractAccessTokenFromUrl(url: string): string {
    const accessTokenRegex = /access_token=([^&]+)/;
    const match = url.match(accessTokenRegex);
    return match ? match[1] : '';
  }
}
