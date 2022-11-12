import { Component, OnInit } from '@angular/core';
import { FormGroup  } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map, Observable, startWith } from 'rxjs';
import { ICountry } from 'src/app/models/countryModel';
import { User } from 'src/app/models/userModel';
import { AuthService } from 'src/app/services/auth.service';
import { FormFactoryService } from 'src/app/services/form-factory.service';
import { _filter } from 'src/app/utils/countryFilter';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {

  form!: FormGroup;
  responseData: User | undefined;
  formData: User | undefined;
  filteredOptions: Observable<ICountry[]> | undefined;
 
  constructor(
    private service: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private formService: FormFactoryService) {
    this.form = this.formService.getRegisterForm();
  }
  
  ngOnInit(): void {
    this.service.userProfile()
      .subscribe(u => {
        this.responseData = u;

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
    console.log(this.form.value);
    
    if (this.form.valid) {
      this.service.updateUserProfile(this.form.value).subscribe(f => {
        this.formData = f;
      });
      this.toastr.success('Successfully updated.', 'Thank you!');
      this.router.navigate(['']);
    }else{
      this.toastr.error('Not updated!', 'Error');
    }
  }
}