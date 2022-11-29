import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { FormFactoryService } from 'src/app/services/form-factory.service';
import { take } from 'rxjs';
import { IFormModel } from 'src/app/models/interfaces/formElementsInterface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

  form!: FormGroup;
  nameModel:           IFormModel;
  emailModel:          IFormModel;
  passwordModel:       IFormModel;
  repeatPasswordModel: IFormModel;
  dialCodeModel:       IFormModel;
  phoneModel:          IFormModel;

  constructor(
    private service: AuthService,
    private tokenService: TokenService,
    private router: Router,
    private toastr: ToastrService,
    private formService: FormFactoryService) {

    let formServiceData = this.formService.getRegisterForm();
    this.form = formServiceData.form;
    this.nameModel = formServiceData.NameModel;
    this.emailModel = formServiceData.EmailModel;
    this.passwordModel = formServiceData.PasswordModel;
    this.repeatPasswordModel = formServiceData.RepeatPasswordModel;
    this.dialCodeModel = formServiceData.DialCodeModel;
    this.phoneModel = formServiceData.RepeatPasswordModel;
  }

  ngOnInit(): void { }

  signUp() {

    if (this.form.valid) {
       
      this.service.signUpService(this.form.value)
      .pipe(take(1))
      .subscribe(user => {
        console.log(user);
        
        this.tokenService.setToken(user.accessToken);
        this.toastr.success('Successfully register.', 'Hello ' + this.form.value.name);
        this.router.navigate(['']);
        return;
      }, error => {
        this.toastr.error( error.message, 'ERROR');
      });
    }
  }

  goTo() {
    this.router.navigate(['/auth/login']);
  }
}      