import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { delay, Observable, take } from 'rxjs';
import { User } from 'src/app/models/userModel';
import { AuthService } from 'src/app/services/auth.service';
import { FormFactoryService } from 'src/app/services/form-factory.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {

  form: FormGroup;
  isData: boolean = false;
  responseData$: Observable<User> | undefined;

  constructor(
    private service: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private formService: FormFactoryService) {  
    this.form = this.formService.getRegisterForm();  
  }
  
  ngOnInit(): void {
    
    this.responseData$ = this.service.getUserService()
    .pipe(delay(600),take(1)); 
  }

  updateProfile() {
    
    if (this.form.valid) {
      this.service.updateUserService(this.form.value)
      .pipe(take(1))
      .subscribe(() => {
        this.toastr.success('You successfully updated your profile!', 
        this.form.get('name')?.value);
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