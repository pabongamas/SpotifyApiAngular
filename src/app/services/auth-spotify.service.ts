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

   bearerToken="Bearer BQD4GZwiJBT3Ap8JoDKVpEQfRTBboz_qT2T4se5DyduNvZATT3rQx3sCij7xBBL14qyrevD5lrOcGR9mWMdUIVzUPe7mB99C1rTJE3R3KtLLRD6lcjI";
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

}
