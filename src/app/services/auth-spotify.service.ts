import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams,HttpErrorResponse,HttpStatusCode} from '@angular/common/http';
import { switchMap, tap,BehaviorSubject,throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { retry,catchError,map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthSpotifyService {

  constructor(
    private http: HttpClient,
  ) { }
   accessToken = localStorage.getItem('accessToken');
   bearerToken="Bearer "+this.accessToken;
   country="CO";
   urlApi="https://api.spotify.com/v1";
   
  newRealese(offset:number,limit:number){
    const headers=new HttpHeaders({
      "Authorization":this.bearerToken,
    });
    return this.http.get<any>(this.urlApi+"/browse/new-releases?country="+this.country+"&offset="+offset+"&limit="+limit,{headers})
    .pipe(
      catchError((error: HttpErrorResponse) => {
        // if (error.status === HttpStatusCode.Conflict) {
        //   return throwError('Algo esta fallando en el server');
        // }
        // if (error.status === HttpStatusCode.NotFound) {
        //   return throwError('El producto no existe');
        // }
        // if (error.status === HttpStatusCode.Unauthorized) {
          // this.authorizeWithSpotify();
        // }
        return throwError('Ups algo salio mal');
      })
    )
  }

  getArtistsById(idArtist:any){
    const headers=new HttpHeaders({
      "Authorization":this.bearerToken
    });
    return this.http.get<any>(`${this.urlApi}/artists/${idArtist}`,{headers})
  }
  getAlbumById(idAlbum:any){
    const headers=new HttpHeaders({
      "Authorization":this.bearerToken
    });
    return this.http.get<any>(`${this.urlApi}/albums/${idAlbum}`,{headers})
  }
  getAlbumsByArtistId(idArtist:any,parametros:any|null){
    var queryString="";
    if(parametros!==null){
       queryString = Object.entries(parametros)
        .map(([key, value]) => `${key}=${value}`)
        .join('&');
        queryString="?"+queryString;
    }
    
    const headers=new HttpHeaders({
      "Authorization":this.bearerToken
    });
    return this.http.get<any>(`${this.urlApi}/artists/${idArtist}/albums${queryString}`,{headers})
  }
  getTopTracksXArtist(idArtist:any){
    const headers=new HttpHeaders({
      "Authorization":this.bearerToken
    });
    return this.http.get<any>(`${this.urlApi}/artists/${idArtist}/top-tracks?country=${this.country}`,{headers})
  }

  authorizeWithSpotify() {
    var domain=environment.domain;
    const clientId = 'b5a10ef1d9b04aedaf0993b8b8d416d9'; // Reemplaza con tu Client ID de Spotify
    const redirectUri = domain+'/callbackAuth'; // Reemplaza con tu Redirect URI registrado en Spotify
  
    const scopes = 'user-read-private user-read-email'; // Reemplaza con los alcances (scopes) necesarios, separados por espacios
  
    const authorizationUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes}&response_type=token`;
  
    window.location.href = authorizationUrl;
  }

  getCurrentUserProfile(){
    const headers=new HttpHeaders({
      "Authorization":this.bearerToken
    });

    return this.http.get<any>(`${this.urlApi}/me`,{headers})
  }

  getProfileUser(idUser:any){
    const headers=new HttpHeaders({
      "Authorization":this.bearerToken
    });
    return this.http.get<any>(`${this.urlApi}/users/${idUser}`,{headers})
  }
  getTopTracksByUser(parametros:any|null){
    var queryString="";
    if(parametros!==null){
       queryString = Object.entries(parametros)
        .map(([key, value]) => `${key}=${value}`)
        .join('&');
        queryString="?"+queryString;
    }
    
    const headers=new HttpHeaders({
      "Authorization":this.bearerToken
    });
    return this.http.get<any>(`${this.urlApi}/me/top/tracks${queryString}`,{headers})
  } 
  getCategories(offset:number,limit:number){
    const headers=new HttpHeaders({
      "Authorization":this.bearerToken
    });
    return this.http.get<any>(`${this.urlApi}/browse/categories?country=${this.country}&offset=${offset}&limit=${limit}`,{headers})
  }
  getCategorieById(idCategorie:any){
    const headers=new HttpHeaders({
      "Authorization":this.bearerToken
    });
    return this.http.get<any>(`${this.urlApi}/browse/categories/${idCategorie}?country=${this.country}`,{headers})
  }
  getPlaylistByCategorieId(idCategorie:any,parametros:any|null){
    var queryString="";
    if(parametros!==null){
       queryString = Object.entries(parametros)
        .map(([key, value]) => `${key}=${value}`)
        .join('&');
        queryString="?"+queryString;
    }
    const headers=new HttpHeaders({
      "Authorization":this.bearerToken
    });
    return this.http.get<any>(`${this.urlApi}/browse/categories/${idCategorie}/playlists${queryString}`,{headers})
  }
}
