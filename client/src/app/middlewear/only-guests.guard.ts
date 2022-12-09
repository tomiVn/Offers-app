import { Injectable } from '@angular/core';
import { CanActivate, Router,  } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from '../services/token/token.service';

@Injectable({
  providedIn: 'root'
})
export class OnlyGuestsGuard implements CanActivate {
  constructor(
    private router: Router,
    private tokenService: TokenService,
    private toastr: ToastrService) { }
  canActivate() {

    let isCurrentUser = this.tokenService.currentUser();

    if (isCurrentUser) {
      this.router.navigate(['/user/' + isCurrentUser.name + '/profile']);
      this.toastr.error('Please log out first!', 'Already exist user!');
      return false;
    }else{
      return true;
    } 
  }

}
