import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, take, tap } from 'rxjs';
import { IToken } from 'src/app/models/tokenModel';
import { User } from 'src/app/models/userModel';
import { AuthService } from 'src/app/services/auth.service';
import { FormFactoryService } from 'src/app/services/form-factory.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {

  form!: FormGroup;

  constructor( private service: AuthService,
               private tokenService: TokenService,
               private router: Router,
               private toastr: ToastrService,
               private formService: FormFactoryService) {

    this.form = this.formService.getLogIn();

  }

  signIn() {

    if (this.form.valid) {
      
      this.service.signInService(this.form.value)
      .pipe(take(1))
      .subscribe(res => {
        
        let token = res.accessToken;
        let user = this.tokenService.decodeToken(token);
        this.tokenService.setToken(token);

        this.router.navigate(['']);

        this.toastr.success('Successfully logged in', 'Hello ' + user.name);
      },  error => {

         error.error.forEach((er: string | undefined) => this.toastr.error('ERROR', er));

      })
    }
  }

  goTo() {
    this.router.navigate(['/auth/register']);
  }

}
