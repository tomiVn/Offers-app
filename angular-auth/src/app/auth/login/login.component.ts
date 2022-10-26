import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { COOKIE_NAME } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {

  form!: FormGroup;
  responseData: any;

  constructor(private fb: FormBuilder, private service: AuthService, private cookie: CookieService) {

    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

  }



  signIn() {

    if(this.form.valid){

     this.service.signIn(this.form.value).subscribe(f => {

       this.responseData = f;
       
       let token = this.responseData?.accessToken
       this.cookie.set(COOKIE_NAME, token);
     });


    }
  }
}
