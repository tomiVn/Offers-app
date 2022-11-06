import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map, Observable, startWith } from 'rxjs';
import { ICountry } from 'src/app/models/countryModel';
import { AuthService } from 'src/app/services/auth.service';
import { _filter } from 'src/app/utils/countryFilter';
import { isPasswordsMatch } from 'src/app/utils/matchPasswords';
import { countryCodeValidator } from 'src/app/utils/validateCountryCode';
import { EMAIL_REGEX } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {

              form!: FormGroup;
       responseData: any;
           formData: any;
    filteredOptions: Observable<ICountry[]> | undefined;

  constructor(
    private      fb: FormBuilder,
    private service: AuthService,
    private  router: Router,
    private  toastr: ToastrService) {

    this.form = this.fb.group({

               name: ['', [ Validators.required ]],

              email: ['', [ Validators.required,
                           Validators.minLength(6),
                           Validators.pattern(EMAIL_REGEX) ]],

           password: ['', [ Validators.required,
                           Validators.minLength(4) ]],

         repeatPass: ['', [ Validators.required ]],
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
      
    this.service.userProfile()

      .subscribe(u => {

        this.responseData = u.user
        this.form.controls['name'].setValue(this.responseData.name);
        this.form.controls['email'].setValue(this.responseData.email);
        this.form.controls['dialCode'].setValue(this.responseData.dialCode);
        this.form.controls['phone'].setValue(this.responseData.phone);

      });
      this.filteredOptions = this.form.get('dialCode')?.valueChanges
                          .pipe(startWith(''),
                           map(value => _filter(value || '')));
  }

  updateProfile() {

      if(this.form.valid){

        this.service.updateUserProfile(this.form.value).subscribe(u => {
        this.formData = u;
        this.toastr.success('Successfully updated.', 'Thank you!');
        this.router.navigate(['']);
      })   
    }    
  }

}
