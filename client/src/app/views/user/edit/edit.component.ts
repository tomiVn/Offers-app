import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { delay, Observable, take, tap } from 'rxjs';
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
  FormModels!: { [s: string]: IFormModel; };
 
  isData: boolean = false;
  responseData$: Observable<User> | undefined;
  
  constructor ( 
    private userService:        UserService,              
    private router:             Router,
    private route:              ActivatedRoute,
    private toastr:             ToastrService,
    private formFactoryService: UserFormService ) 
    {  
      let formServiceData = this.formFactoryService.formUserDetails();
      this.form = formServiceData.form;
      this.FormModels = formServiceData.models;
    }
  
  ngOnInit(): void {
    
    this.responseData$ = this.userService.GetUser()
    .pipe(delay(600),take(1)); 

    this.route.params.subscribe( params => {
      this.responseData$ = 
        this.userService.GetUser( )
        .pipe(
          tap( user => {
            if(user._id !== params['userId'] ){
              this.router.navigate(['/notfound']);
              return; 
            }
          }
        ),
        delay(600));
    });
  }

  updateProfile() {
    
    if (this.form.valid) {
      
      this.userService.UpdateUser(this.form.value)
        .pipe(take(1))
        .subscribe(( user ) => 
          {       
            this.toastr.success('You successfully updated your profile!', user.name);       
            this.router.navigate(['/user/' + user._id + '/profile']);
          }, 
          ( error: any ) => 
            {
              this.toastr.error( error.message, 'ERROR' );
            }
        );     
    }
    else{
      this.toastr.error('Your profile is updated!', 'Error');
    }
  }

}
