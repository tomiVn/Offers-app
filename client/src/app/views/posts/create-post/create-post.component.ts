import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IFormModel } from 'src/app/models/interfaces/formElementsInterface';
import { PostsFormService } from 'src/app/services/forms/posts-form-factory/posts-form.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.less']
})
export class CreatePostComponent implements OnInit {
  
  form!:            FormGroup; 
  
  titleModel:       IFormModel;
  descriptionModel: IFormModel;

  constructor( 
    private postFormFactory: PostsFormService) 
    {
      let formServiceData = this.postFormFactory.formCreatePost();            
      this.form = formServiceData.form;
      this.titleModel = formServiceData.TitleModel;
      this.descriptionModel = formServiceData.DescriptionModel;
    }

  ngOnInit(): void { }

  actionForm(){ }

}
