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

   bearerToken="Bearer BQDMLeYPfNd08tY42etDtITOQWF7TPOdtVZJFrekesHui61-rbq2AJRqABefYh6g_luzmVDzIe0MlE0kvsw8x0cqxXhLWVqgh4WLE16W8wpNR3d4QtE";
  newRealese(offset:number,limit:number){
    const headers=new HttpHeaders({
      "Authorization":this.bearerToken,
    });
    return this.http.get<any>("https://api.spotify.com/v1/browse/new-releases?offset="+offset+"&limit="+limit,{headers});
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
  getAlbumsByArtistId(idArtist:any){
    const headers=new HttpHeaders({
      "Authorization":this.bearerToken
    });
    return this.http.get<any>(`https://api.spotify.com/v1/artists/${idArtist}/albums`,{headers})
  }

}
