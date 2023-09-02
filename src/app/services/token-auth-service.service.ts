import { Injectable } from '@angular/core';
import { getCookie, setCookie, removeCookie } from 'typescript-cookie';
import jwt_decode, { JwtPayload } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class TokenAuthServiceService {
  token: string | null = null;
  constructor() {}
  saveIdUserLoggin(id: string) {
    localStorage.setItem('userLogin', id);
  }
  getIdUserLoggin() {
    const token = localStorage.getItem('userLogin');
    return token;
  }

  saveToken(token: string) {
    setCookie('accessToken', token, { expires: 365, path: '/' });
  }
  saveTokenExpire(expire: string) {
    // Obtener la hora actual
    var fechaActualMod = new Date();

    var expirevalue = parseFloat(expire);
    // Sumar una hora (3600 segundos)
    fechaActualMod.setSeconds(fechaActualMod.getSeconds() + expirevalue);
    setCookie('expiresAccessToken', fechaActualMod.getTime());
  }
  getToken() {
    const token = getCookie('accessToken');
    return token;
  }
  getTokenExpire(): string | null | undefined {
    const TokenExpire = getCookie('expiresAccessToken');
    return TokenExpire;
  }
  removeToken() {
    removeCookie('accessToken');
    removeCookie('expiresAccessToken');
  }

  isValidToken() {
    var fechaActualInThisMoment = new Date();
    const token = this.getToken();
    console.log(token);
    if (!token) {
      return false;
    } else {
      // this.getTokenExpire()>fechaActualInThisMoment.getTime;
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
