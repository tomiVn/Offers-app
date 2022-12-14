import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DescriptionModel } from 'src/app/models/form-elements-models/descriptionModel';
import { ImgModel } from 'src/app/models/form-elements-models/imgModel';
import { TitleModel } from 'src/app/models/form-elements-models/titleModel';
import { buildFormFunction } from 'src/app/utils/build-form';

@Injectable({
  providedIn: 'root'
})
export class PostsFormService {

  constructor(private fb: FormBuilder) { }

  formCreatePost(){

    let ModelsData = {
      TitleModel,
      ImgModel,
      DescriptionModel
    }

    return{
      models: ModelsData,     
      form: this.fb.group( buildFormFunction( ModelsData ))
    } 
  }
}
