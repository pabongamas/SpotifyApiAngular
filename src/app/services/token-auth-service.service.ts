import { Injectable } from '@angular/core';
import {getCookie,setCookie,removeCookie} from 'typescript-cookie'
import jwt_decode,{JwtPayload} from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class TokenAuthServiceService {
  token: string | null = null;
  constructor() {}
  saveIdUserLoggin(id: string) {
    localStorage.setItem('userLogin', id);
  }
  getIdUserLoggin(){
    const token = localStorage.getItem('userLogin');
    return token;
  }

  saveToken(token:string){
    setCookie('accessToken',token,{expires:365,path:'/'})
  }
  getToken(){
    const token=getCookie('accessToken');
    return token;
  }
  removeToken(){
    removeCookie('accessToken')
  }

  isValidToken() {
    const token = this.getToken();
    console.log(token);
    if (!token) {
      return false;
    }
    return true;
    // const decodeToken = jwt_decode<JwtPayload>(token);
    // console.log(decodeToken);
    // if (decodeToken && decodeToken?.exp) {
    //   const tokenDate = new Date(0);
    //   tokenDate.setUTCSeconds(decodeToken.exp);
    //   const today = new Date();
    //   return tokenDate.getTime() > today.getTime();
    // }
    // return false;
  }
}
