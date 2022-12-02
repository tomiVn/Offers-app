import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { delay, Observable, take } from 'rxjs';
import { IFormModel } from 'src/app/models/interfaces/formElementsInterface';
import { User } from 'src/app/models/interfaces/userModel';
import { UserService } from 'src/app/services/api/user/user.service';
import { UserFormService } from 'src/app/services/forms/user-form-factory/user-form.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.less']
})
export class EditComponent implements OnInit {

  form: FormGroup;
  
  nameModel:        IFormModel;
  genderModel:      IFormModel;
  bornModel:        IFormModel;
  countryCodeModel: IFormModel;
  phoneModel:       IFormModel;
 
  
  isData: boolean = false;
  responseData$: Observable<User> | undefined;
  
  constructor( 
    private userService: UserService,              
    private router: Router,
    private toastr: ToastrService,
    private formFactoryService: UserFormService) {  

    let formServiceData = this.formFactoryService.formUserDetails();
    this.form = formServiceData.form;
    this.nameModel = formServiceData.NameModel;
    this.genderModel = formServiceData.GenderModel; 
    this.bornModel = formServiceData.BornModel;
    this.countryCodeModel = formServiceData.DialCodeModel;
    this.phoneModel = formServiceData.PhoneModel;  
  }
  
  ngOnInit(): void {
    
    this.responseData$ = this.userService.getUserDetails()
    .pipe(delay(600),take(1)); 
  }

  updateProfile() {
    
    if (this.form.valid) {
      
      this.userService.updateUserDetails(this.form.value)
      .pipe(take(1))
      .subscribe(( user ) => {
        
        this.toastr.success('You successfully updated your profile!', user.name);
        
        this.router.navigate(['/user/' + user._id + '/profile']);
      }, 
      (error: any) => {
        this.toastr.error( error.message, 'ERROR' );
      });     
    }else{

      this.toastr.error('Your profile is updated!', 'Error');
    }
  }

}
