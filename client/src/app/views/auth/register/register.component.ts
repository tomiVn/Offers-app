import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from 'src/app/services/token/token.service';
import { take } from 'rxjs';
import { IFormModel } from 'src/app/models/interfaces/formElementsInterface';
import { AuthFormService } from 'src/app/services/forms/auth-form-factory/auth-form.service';
import { AuthService } from 'src/app/services/api/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent {

  form!: FormGroup;
  FormModels!: { [s: string]: IFormModel; };

  constructor(
    private authService:  AuthService,
    private tokenService: TokenService,
    private router:       Router,
    private toastr:       ToastrService,
    private formService:  AuthFormService) 
    {
      let formServiceData = this.formService.getRegisterForm();
      this.form = formServiceData.form;
      this.FormModels = formServiceData.models;
    }

  signUp() {

    if (this.form.valid) {
       
      this.authService.signUp(this.form.value)
        .pipe(take(1))
        .subscribe(res => 
          {
            let token = res.accessToken;
            let user = this.tokenService.setToken(token);
        
            this.toastr.success('Successfully register.', 'Hello ' + user?.name);
            this.router.navigate(['/user/' + user?.id + '/profile']);
            return;
          }, 
          error => {
            this.toastr.error( error.message, 'ERROR');
            return;
          }
        );
    }
  }

  goTo() {
    this.router.navigate(['/auth/login']);
  }
  
}      