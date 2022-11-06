import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map, Observable, startWith } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { countryCodeValidator } from 'src/app/utils/validateCountryCode';
import { isPasswordsMatch } from 'src/app/utils/matchPasswords';
import { EMAIL_REGEX } from 'src/environments/environment';
import { ICountry } from '../../models/countryModel';
import { _filter } from 'src/app/utils/countryFilter';


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
    private           fb: FormBuilder,
    private      service: AuthService,
    private tokenService: TokenService,
    private       router: Router,
    private       toastr: ToastrService) {

    this.form = this.fb.group({

                    name: ['', [ Validators.required]],

                   email: ['', [ Validators.required,
                                 Validators.minLength(6),
                                 Validators.pattern(EMAIL_REGEX)]],

                password: ['', [ Validators.required,
                                 Validators.minLength(4)]],

              repeatPass: ['', [ Validators.required]],

                dialCode: ['', [ Validators.required, countryCodeValidator]],

                   phone: ['', [ Validators.required,
                                 Validators.pattern("^[0-9]*$"),
                                 Validators.minLength(6),
                                 Validators.maxLength(12)]],
    },
      {
              validators: isPasswordsMatch('password', 'repeatPass')
      },
    )

  }

  ngOnInit(): void {
    this.filteredOptions = this.form.get('dialCode')?.valueChanges
                          .pipe(startWith(''),
                           map(value => _filter(value || '')));
  }

  signUp() {

    if (this.form.valid) {

      this.service.signUpService( this.form.value ).subscribe(f => {

        this.responseData = f;

        this.tokenService.setToken( this.responseData?.accessToken );

        this.router.navigate(['']);

        this.toastr.success('Successfully register.', 'Thank you!');
      });
    }
  }
}      