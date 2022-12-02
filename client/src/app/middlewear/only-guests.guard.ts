import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

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
      this.router.navigate(['/user/' + isCurrentUser.id + '/profile']);
      this.toastr.error('Please log out first!', 'Already exist user!');
      return false;
    }else{
      return true;
    } 
  }

}
