import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map, Observable, startWith } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { _filter } from 'src/app/utils/countryFilter';
import { ICountry } from 'src/app/models/countryModel';
import { FormFactoryService } from 'src/app/services/form-factory.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

  form!: FormGroup;
  responseData: any;
  filteredOptions: Observable<ICountry[]> | undefined;

  constructor(
    private service: AuthService,
    private tokenService: TokenService,
    private router: Router,
    private toastr: ToastrService,
    private formService: FormFactoryService) {

    this.form = this.formService.getRegisterForm();

  }

  ngOnInit(): void {
    this.filteredOptions = this.form.get('dialCode')?.valueChanges
      .pipe(startWith(''),
        map(value => _filter(value || '')));
  }

  signUp() {

    if (this.form.valid) {

      this.service.signUpService(this.form.value).subscribe(f => {

        this.responseData = f;

        this.tokenService.setToken(this.responseData?.accessToken);

        this.router.navigate(['']);

        this.toastr.success('Successfully register.', 'Thank you!');
      });
    }
  }

  goTo() {
    this.router.navigate(['/auth/login']);
  }
}      