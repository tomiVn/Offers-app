import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { FormFactoryService } from 'src/app/services/form-factory.service';
import { take } from 'rxjs';
import { passwordModel, emailModel, repeatPasswordModel, nameModel, phoneModel } from 'src/app/models/formElemetsModel';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

  form!: FormGroup;
   nameModel = nameModel();
   emailModel =    emailModel();
   passwordModel = passwordModel();
   repeatPasswordModel = repeatPasswordModel();
   phoneModel = phoneModel();

  constructor(
    private service: AuthService,
    private tokenService: TokenService,
    private router: Router,
    private toastr: ToastrService,
    private formService: FormFactoryService) {
    this.form = this.formService.getRegisterForm();

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