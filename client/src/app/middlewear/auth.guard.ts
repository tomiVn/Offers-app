import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from '../services/token/token.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( 
    private router: Router, 
    private tokenService: TokenService,
    private toastr: ToastrService) { }

  canActivate() {

    let token = this.tokenService.getToken();

    if (token) {

      let decodeTokenPayload = this.tokenService.decodeToken(token);
      
      if ( !decodeTokenPayload.exp 
           || decodeTokenPayload.exp * 1000 < new Date().getTime()
           || !decodeTokenPayload.name ) {
            
        this.tokenService.deleteToken();
        this.toastr.info('You session expire.', 'Please login again!');
        this.router.navigate(['/auth/login']);
        
        return false;
      }

      return true;
    }

    this.router.navigate(['/auth/login']);
    return false;
  }
}
