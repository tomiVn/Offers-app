import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { IFormModel } from 'src/app/models/interfaces/formElementsInterface';
import { AuthService } from 'src/app/services/api/auth/auth.service';
import { AuthFormService } from 'src/app/services/forms/auth-form-factory/auth-form.service';
import { TokenService } from 'src/app/services/token/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {

  form!:         FormGroup;
  FormModels!: { [s: string]: IFormModel; };

  constructor ( 
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router,
    private toastr: ToastrService,
    private formService: AuthFormService ) 
    {
      let formServiceData = this.formService.getLogIn();
      this.form = formServiceData.form;
      this.FormModels = formServiceData.models;
    }
  
  signIn() {

    if (this.form.valid) {
      
      this.authService.signIn(this.form.value)
      .pipe(take(1))
      .subscribe(res => 
        {          
          let token = res.accessToken;
          let user  = this.tokenService.setToken(token);
          this.form.reset();
          this.toastr.success('Successfully logged in', 'Hello ' + user?.name);
          this.router.navigate(['/user/' + user.id + '/profile']);
        },  
        error => 
          {
            error.error.forEach((er: string | undefined) => this.toastr.error('ERROR', er));
            this.form.controls['password'].setValue(null);
          }
      )
    }
  }

  goTo() {
    this.router.navigate(['/auth/register']);
  }

}
