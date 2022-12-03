import { Component, ElementRef, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { delay, Observable, take } from 'rxjs';
import { IFormModel } from 'src/app/models/interfaces/formElementsInterface';
import { User } from 'src/app/models/interfaces/userModel';
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
  uploadVisibility: boolean = false;
  uploadImage: string | undefined;
  fileInput: HTMLElement | undefined;

  constructor(
    private userService: UserService,
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
        this.toastr.success('You successfully updated your profile!'); 
        this.uploadVisibility = false;      
        return;
      }, 
      (error: any) => {
       return this.toastr.error( error.message, 'ERROR' );
      });     
    }else{

      this.toastr.error('Your profile is not updated!', 'Error');
    }
  }

  cancel() {
    this.uploadVisibility = !this.uploadVisibility;
    return;
  }

  upload() {
    let filebutton = this.ref.nativeElement.querySelector('#upload');
    filebutton.click(); 
    this.toastr.info('Types JPEG / JPG / PNG | Limit 1MB!', 'Image in quadratic form!');
    return;
  }

  onImageSelected(img: string){
    this.uploadVisibility = this.form.valid && this.form.controls[this.imgModel.elementName].value; 
    if(this.uploadVisibility){
      this.uploadImage = img;
    }      
  }
}

