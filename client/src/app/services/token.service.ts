import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { COOKIE_NAME } from 'src/app/utils/const';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private cookie: CookieService) { }

  setToken(token: any){
    this.cookie.set(COOKIE_NAME, token, { secure: true });  
    return getPayload(token);
  }

  getToken(){
    return this.cookie.get(COOKIE_NAME);
  }

  deleteToken(){
    this.cookie.delete(COOKIE_NAME);
  }

  decodeToken(token: string){
    return getPayload(token);
  }

  currentUser(){

    let token = this.cookie.get(COOKIE_NAME);
    if(token){
      return getPayload(token);
    }
    return null;
  }

  isUser(){
    let result: boolean = this.cookie.get(COOKIE_NAME) ? true : false;
    return result;
  }
}

function getPayload(token: string){
  let payload = token.split('.')[1];
  return JSON.parse(atob(payload));
}