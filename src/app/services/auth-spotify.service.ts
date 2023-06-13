import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { switchMap, tap,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthSpotifyService {

  constructor(
    private http: HttpClient,
  ) { }

  Authorization(){
  
    // .pipe(
    //   tap(response=>this.TokenService.saveToken(response.access_token))
    // );
  }

}
