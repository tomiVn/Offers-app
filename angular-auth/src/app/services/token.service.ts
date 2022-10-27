import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { COOKIE_NAME } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private cookie: CookieService) { }

  setToken(token: any){

   return this.cookie.set(COOKIE_NAME, token, { secure: true });
  }

  getToken(){

    return this.cookie.get(COOKIE_NAME);
  }

  deleteToken(){
    this.cookie.delete(COOKIE_NAME);
  }

}
