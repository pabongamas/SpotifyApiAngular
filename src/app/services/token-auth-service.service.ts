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
    // localStorage.setItem('userLogin', id);
    setCookie('userLogin', id, { expires: 365, path: '/' });
  }
  getIdUserLoggin() {
    // const token = localStorage.getItem('userLogin');
    // return token;
    const idUser = getCookie('userLogin');
    return idUser;
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
    removeCookie('userLogin');
  }

  isValidToken() {
    const expireToken = this.getTokenExpire();
    const fechaActualInThisMoment = new Date();
    const dateActual = fechaActualInThisMoment.getTime();
    const token = this.getToken();
    if (!token) {
      return false;
    } else {
      if (expireToken !== null && expireToken !== undefined) {
        const dateExpire = parseFloat(expireToken);
        if (dateExpire < dateActual) {
          return false;
        }
      }
    }
    return true;
  }
}
