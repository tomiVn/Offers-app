import { Component, ElementRef, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IFormModel } from 'src/app/models/interfaces/formElementsInterface';
import { PostsFormService } from 'src/app/services/forms/posts-form-factory/posts-form.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.less']
})
export class CreatePostComponent implements OnInit {
  
  form!:                      FormGroup; 
  FormModels!: { [s: string]: IFormModel; };
  uploadVisibility =          true;
  uploadImage: string | undefined;

  constructor( 
    private postFormFactory: PostsFormService,
    private ref: ElementRef,
    private toastr: ToastrService) 
    {
      let formServiceData = this.postFormFactory.formCreatePost();            
      this.form = formServiceData.form;
      this.FormModels = formServiceData.models;
    }

  ngOnInit(): void { }

  actionForm(){}

  upload() {
    let filebutton = this.ref.nativeElement.querySelector('#upload');
    filebutton.click(); 
    this.toastr.info('Types JPEG / JPG / PNG | Limit 1MB!', 'Image information!');
  }

  onImageSelected(img: string){
    this.uploadVisibility = !this.uploadVisibility; 
    this.uploadImage = img;      
  }

  cancel() {
    this.uploadVisibility = !this.uploadVisibility;
    this.uploadImage = undefined;
  }

}
