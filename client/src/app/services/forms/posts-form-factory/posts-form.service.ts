import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DescriptionModel } from 'src/app/models/form-elements-models/descriptionModel';
import { ImgModel } from 'src/app/models/form-elements-models/imgModel';
import { TitleModel } from 'src/app/models/form-elements-models/titleModel';

@Injectable({
  providedIn: 'root'
})
export class PostsFormService {

  constructor(private fb: FormBuilder) { }

  formCreatePost(){
    return{
      TitleModel,
      ImgModel,
      DescriptionModel,
      
      form: this.fb.group({
        title:       TitleModel.validation,
        file:        ImgModel.validation,
        description: DescriptionModel.validation
      })
    } 
  }
}
