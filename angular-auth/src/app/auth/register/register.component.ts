import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { COOKIE_NAME } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../userModel';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent {

  form!: FormGroup;
  responseData: any;

  constructor(private fb: FormBuilder, private service: AuthService, private cookie: CookieService) {

    this.form = this.fb.group({
      name: ['', [Validators.required]],
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      repeatPass: ['', [Validators.required]],
    },

      {
        validators: this.isPasswordsMatch('password', 'repeatPass')
      },
    )
  }

  isPasswordsMatch(password: any, repeatPass: any) {

    return (formgroup: FormGroup) => {

      let pass = formgroup.controls[password];
      let repass = formgroup.controls[repeatPass];

      if (repass.errors && !repass.errors['isPasswordsMatch']) {
        return;
      }

      if (pass.value !== repass.value) {

        repass.setErrors({ isPasswordsMatch: false });

      } else {

        repass.setErrors(null);
      }

    };
  }


  signUp() {

    if (this.form.valid) {

      this.service.signUpService(this.form.value).subscribe(f => {

        this.responseData = f;
        let token = this.responseData.accessToken;
        this.cookie.set(COOKIE_NAME, token);
      });

    }
    //console.log(this.cookie.get(COOKIE_NAME));
  }

}
