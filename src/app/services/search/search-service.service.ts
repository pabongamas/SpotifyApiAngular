import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpErrorResponse,
  HttpStatusCode,
} from '@angular/common/http';
import { switchMap, tap, BehaviorSubject, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { retry, catchError, map } from 'rxjs/operators';
import { TokenAuthServiceService } from '../../services/token-auth-service.service';
import { checkToken } from '../../interceptors/token.interceptor';
import { searchModel } from 'src/app/website/models/search.model';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  constructor(
    private http: HttpClient,
    private tokenAuthServiceService: TokenAuthServiceService
  ) {}
  accessToken = this.tokenAuthServiceService.getToken();
  bearerToken = 'Bearer ' + this.accessToken;
  country = 'CO';
  urlApi = 'https://api.spotify.com/v1';

  searchItems(search:string,typesSearch:string[]) {
    const types=typesSearch.join(",");
    var params="?q="+search;
    if(types){
      params+="&type="+types;
    }
    return this.http.get<searchModel>(`${this.urlApi}/search${params}`,  {
      context: checkToken(),
    });
  }
}
