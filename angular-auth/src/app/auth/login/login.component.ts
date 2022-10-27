import { Component, InjectionToken } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {

  form!: FormGroup;
  responseData: any;

  constructor(private fb: FormBuilder, private service: AuthService, private tokenService: TokenService) {

    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });

  }

 signIn() {

    if (this.form.valid) {

      this.service.signIn(this.form.value).subscribe(f => {

        this.responseData = f;
        this.tokenService.setToken(this.responseData?.accessToken);
      });    
    }
  }
}
