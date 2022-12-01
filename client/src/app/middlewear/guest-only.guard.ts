import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class GuestOnlyGuard implements CanActivate {
  constructor(
    private router: Router, 
    private tokenService: TokenService,
    private toastr: ToastrService){ }

  canActivate(){
    
    let token = this.tokenService.getToken();
    
    if(!token){
      return true;
    }
    
    this.toastr.error('Please log out first!', 'Already exist user!')
    this.router.navigate(['']);
    return false;
  }
  
}
