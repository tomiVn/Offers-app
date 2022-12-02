import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { IFormModel } from 'src/app/models/interfaces/formElementsInterface';
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
  emailModel:    IFormModel;
  passwordModel: IFormModel;

  constructor( 
    private service: AuthService,
    private tokenService: TokenService,
    private router: Router,
    private toastr: ToastrService,
    private formService: FormFactoryService) {
      
    let formServiceData = this.formService.getLogIn();
    this.form = formServiceData.form;
    this.emailModel = formServiceData.EmailModel;
    this.passwordModel = formServiceData.PasswordModel;
  }
  
  signIn() {

    if (this.form.valid) {
      
      this.service.signInService(this.form.value)
      .pipe(take(1))
      .subscribe(res => {
        this.form.reset();
        let token = res.accessToken;
        let user = this.tokenService.setToken(token);
        this.toastr.success('Successfully logged in', 'Hello ' + user?.name);
        this.router.navigate(['/user/' + user.id + '/profile']);
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
