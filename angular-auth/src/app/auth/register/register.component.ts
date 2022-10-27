import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { EMAIL_REGEX } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent {

  form!: FormGroup;
  responseData: any;

  constructor(private fb: FormBuilder, private service: AuthService,
    private tokenService: TokenService, private router: Router) {

    this.form = this.fb.group({

            name: ['', [Validators.required]],

           email: ['', [Validators.required, Validators.minLength(6), Validators.pattern(EMAIL_REGEX)]],

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

        this.tokenService.setToken(this.responseData?.accessToken);

        this.router.navigate(['']);
      });
    }

  }
}      