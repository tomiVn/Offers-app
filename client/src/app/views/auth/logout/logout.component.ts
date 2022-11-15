import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenService } from 'src/app/services/token.service';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { catchError, take, throwError } from 'rxjs';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [CommonModule],
  template: ``,
  styles: [
  ]
})
export class LogoutComponent implements OnInit {

  constructor(private service: AuthService, 
              private tokenService: TokenService, 
              private router: Router,
              private toastr: ToastrService) { }

  ngOnInit(){

    this.service.logOut()
    .pipe(take(1))
    .subscribe((user) => {
      if(!user){
        this.router.navigate(['']);
        throwError({message: 'Not found this user!'})
      }
    this.tokenService.deleteToken();
    this.router.navigate(['/auth/login']);
    this.toastr.success('You successfully sign out.', 'Hope to see you again ' + user.name);
   }, (error) => { 
    this.router.navigate(['']);
    this.toastr.error( error.message, 'Error');
   })

   

   
   
   
  }

}
