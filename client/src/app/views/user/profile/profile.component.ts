import { Component, ElementRef, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { delay, Observable, take } from 'rxjs';
import { IFormModel } from 'src/app/models/interfaces/formElementsInterface';
import { User } from 'src/app/models/interfaces/userModel';
import { AuthService } from 'src/app/services/api/auth/auth.service';
import { UserService } from 'src/app/services/api/user/user.service';
import { UserFormService } from 'src/app/services/forms/user-form-factory/user-form.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {

  form: FormGroup;
  isData: boolean = false;
  responseData$: Observable<User> | undefined;
  imgModel!: IFormModel;
  uploadVisibility = true;
  uploadImage: string | undefined;
  fileInput: HTMLElement | undefined;

  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService,
    private formFactoryService: UserFormService,
    private ref: ElementRef) {

    let formServiceData = this.formFactoryService.formProfileImage();
    this.form = formServiceData.form;
    this.imgModel = formServiceData.ImgModel;
  }

  ngOnInit(): void {

    this.responseData$ = this.userService.getUserDetails()
      .pipe(delay(600), take(1));
  }

  updateProfile() {
      
    if (this.form.valid && this.form.value) {
      this.userService.updateUserAvatar(this.form.value)
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

      this.toastr.error('Your profile is not updated!', 'Error');
    }
  }

  cancel() {
    this.uploadVisibility = !this.uploadVisibility;
  }

  upload() {
    let filebutton = this.ref.nativeElement.querySelector('#upload');
    filebutton.click(); 
    this.toastr.info('Types JPEG / JPG / PNG | Limit 1MB!', 'Image in quadratic form!');
  }

  onImageSelected(img: string){
    this.uploadVisibility = !this.uploadVisibility; 
    this.uploadImage = img;    
  }
}