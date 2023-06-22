import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenAuthServiceService {
  token:string|null="";
  constructor() { }
 

  saveToken(token:string){
    localStorage.setItem('accessToken',token);

  }
  getToken(){
    const token=localStorage.getItem('accessToken');  
    return token;
  }
  removeToken(){
    localStorage.removeItem('accessToken');
  }
}
