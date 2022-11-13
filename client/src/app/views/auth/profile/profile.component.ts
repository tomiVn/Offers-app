import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map, Observable, startWith, take } from 'rxjs';
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

  form: FormGroup;
  responseData = false;
  formData: User | undefined;

  constructor(
    private service: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private formService: FormFactoryService,
    private fb: FormBuilder) {
    
    this.form = this.formService.getRegisterForm();  
  }
  
  ngOnInit(): void {
    
    this.service.userProfile()
    .pipe(      
      take(1))      
       .subscribe(user => {
        setTimeout(() =>{
          this.responseData = true;
          this.form.controls['name'].setValue(user.name);
          this.form.controls['email'].setValue(user.email);
          this.form.controls['dialCode'].setValue(user.dialCode);
          this.form.controls['phone'].setValue(user.phone);
        }, 600)          
      });
  }

  updateProfile() {
    
    if (this.form.valid) {
      this.service.updateUserProfile(this.form.value)
      .pipe(take(1))
      .subscribe(f => {
        this.formData = f;
        this.toastr.success('You successfully updated your profile!', this.form.get('name')?.value);
        this.router.navigate(['']);
      }, 
      (error: any) => {
        this.toastr.error( error.message, 'ERROR' );
      });     
    }else{

      this.toastr.error('Your profile is updated!', 'Error');
    }
  }
}