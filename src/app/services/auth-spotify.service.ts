import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { switchMap, tap,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthSpotifyService {

  constructor(
    private http: HttpClient,
  ) { }

   bearerToken="Bearer BQBBKpnV2ovEF5WEHnWRCgXM7bxKnhQEmBdN7Lm3S67i1Ed-4jzTMyqbj0Kzhf39t9BmhUnR9B8BsJ7ek4n1RuuMse3fZgwp7tHeLKjyCjc3STutvXU";
  newRealese(){
    const headers=new HttpHeaders({
      "Authorization":this.bearerToken
    });
    return this.http.get<any>("https://api.spotify.com/v1/browse/new-releases",{headers});
  }

  getArtistsById(idArtist:any){
    const headers=new HttpHeaders({
      "Authorization":this.bearerToken
    });
    return this.http.get<any>(`https://api.spotify.com/v1/artists/${idArtist}`,{headers})
  }
  getAlbumById(idAlbum:any){
    const headers=new HttpHeaders({
      "Authorization":this.bearerToken
    });
    return this.http.get<any>(`https://api.spotify.com/v1/albums/${idAlbum}`,{headers})
  }

}
