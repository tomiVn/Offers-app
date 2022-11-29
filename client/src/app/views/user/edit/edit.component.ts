import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { delay, Observable, take } from 'rxjs';
import { IFormModel } from 'src/app/models/interfaces/formElementsInterface';
import { User } from 'src/app/models/interfaces/userModel';
import { AuthService } from 'src/app/services/auth.service';
import { FormFactoryService } from 'src/app/services/form-factory.service';

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
    private service: AuthService,              
    private router: Router,
    private toastr: ToastrService,
    private formService: FormFactoryService) {  

    let formServiceData = this.formService.getUpdateUserForm();
    this.form = formServiceData.form;
    this.nameModel = formServiceData.NameModel;
    this.genderModel = formServiceData.GenderModel; 
    this.bornModel = formServiceData.BornModel;
    this.countryCodeModel = formServiceData.DialCodeModel;
    this.phoneModel = formServiceData.PhoneModel;  
  }
  
  ngOnInit(): void {
    
    this.responseData$ = this.service.getUserService()
    .pipe(delay(600),take(1)); 
  }

  updateProfile() {
    
    if (this.form.valid) {
      
      this.service.updateUserService(this.form.value)
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
