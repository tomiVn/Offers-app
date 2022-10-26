import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { COOKIE_NAME } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private service: AuthService, private router: Router, private cookie: CookieService){}

  canActivate(){
    
    let token = this.service.isUser();
    if(token){
    
    let payload = token.split('.')[1];
    let user = JSON.parse(atob(payload));
    
    if(!user.username){
      
      this.cookie.delete(COOKIE_NAME);
      this.router.navigate(['login']);
      return false; 
    }    
      return true;
    }else{

      this.router.navigate(['login']);
      return false; 
    }
    
  } 
}
