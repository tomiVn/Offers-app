import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
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
        this.form.reset();
        this.router.navigate(['']);

        this.toastr.success('Successfully logged in', 'Hello ' + user.name);

      },  error => {
         error.error.forEach((er: string | undefined) => this.toastr.error('ERROR', er));
         this.form.controls['password'].setValue(null);
      })
    }
  }

  goTo() {
    this.router.navigate(['/auth/register']);
  }

}
