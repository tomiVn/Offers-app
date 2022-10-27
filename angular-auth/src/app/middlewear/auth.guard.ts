import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenService } from '../services/token.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private tokenService: TokenService) { }

  canActivate() {

    let token = this.tokenService.getToken();

    if (token) {

      let payload = token.split('.')[1];
      let decodeTokenPayload = JSON.parse(atob(payload));

      if (!decodeTokenPayload.exp || decodeTokenPayload.exp * 1000 < new Date().getTime()
        || !decodeTokenPayload.username) {

        this.tokenService.deleteToken();
        this.router.navigate(['login']);
        return false;
      }

      return true;
    }
    
    this.router.navigate(['login']);
    return false;
  }
}
