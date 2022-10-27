import { Component, InjectionToken } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { EMAIL_REGEX } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {

  form!: FormGroup;
  responseData: any;

  constructor(private fb: FormBuilder, 
              private service: AuthService, 
              private tokenService: TokenService, 
              private router: Router) {

    this.form = this.fb.group({

         email: ['', [Validators.required, 
                      Validators.minLength(6), 
                      Validators.pattern(EMAIL_REGEX)]],

      password: ['', [Validators.required, 
                      Validators.minLength(4)]]
    });

  }

 signIn() {

    if (this.form.valid) {
      
      this.service.signIn(this.form.value).subscribe(f => {

        this.responseData = f;

        this.tokenService.setToken(this.responseData?.accessToken);

        this.router.navigate(['']);
      });    
    }
  }
}
