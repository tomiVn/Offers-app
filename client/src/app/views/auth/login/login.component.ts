import { Component } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IToken } from 'src/app/models/tokenModel';
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
  responseData!: IToken;

  constructor(private service: AuthService, 
              private tokenService: TokenService, 
              private router: Router,
              private toastr: ToastrService,
              private formService: FormFactoryService) {

    this.form = this.formService.getLogIn();

  }

 signIn() {

    if (this.form.valid) {
      
      this.service.signIn(this.form.value).subscribe(f => {

        this.responseData = f;

        this.tokenService.setToken(this.responseData?.accessToken);

        this.router.navigate(['']);

        this.toastr.success('Successfully logged in', 'Thank you!');
      },  error => {

         error.error.forEach((er: string | undefined) => this.toastr.error('ERROR', er));

      });    
    }
  }

  goTo(){
    this.router.navigate(['/auth/register']);
  }
}
