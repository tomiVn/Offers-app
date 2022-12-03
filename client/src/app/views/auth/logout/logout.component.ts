import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenService } from 'src/app/services/token/token.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { AuthService } from 'src/app/services/api/auth/auth.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [CommonModule],
  template: ``,
  styles: []
})
export class LogoutComponent implements OnInit {

  constructor(
    private authService:  AuthService,
    private tokenService: TokenService,
    private router:       Router,
    private toastr:       ToastrService) { }

  ngOnInit() {
    this.actionLogOut();
  }

  actionLogOut() {

    this.authService.signOut()
      .pipe(take(1))
      .subscribe((res) => 
        {
          if (!res.name) {
              this.toastr.error('We can\'t recognize you!!!', 'Error');
              this.router.navigate(['/notfound']);
              throw ({ message: 'We can\'t recognize you!' })
          }

          this.tokenService.deleteToken();
          this.router.navigate(['/auth/login']);
          this.toastr.success('You successfully sign out.', res.name + ' hope to see you again ');
          return;
        }
      );
  }
}
