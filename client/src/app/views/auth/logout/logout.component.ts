import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenService } from 'src/app/services/token.service';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [CommonModule],
  template: ``,
  styles: []
})
export class LogoutComponent implements OnInit {

  constructor(
    private service: AuthService,
    private tokenService: TokenService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {

    this.actionLogOut();
  }

  actionLogOut() {

    this.service.signOutService()
      .pipe(take(1))
      .subscribe((res) => {
        if (!res.name) {
          this.toastr.error('We can\'t recognize you!!!', 'Error');
          this.router.navigate(['']);
          throw ({ message: 'We can\'t recognize you!' })
        }
        this.tokenService.deleteToken();
        this.router.navigate(['/auth/login']);
        this.toastr.success('You successfully sign out.', res.name + ' hope to see you again ');
      });
  }
}
