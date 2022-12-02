import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DescriptionModel } from 'src/app/models/formElementsModels.ts/descriptionModel';
import { ImageModel } from 'src/app/models/formElementsModels.ts/imageModel';
import { TitleModel } from 'src/app/models/formElementsModels.ts/titleModel';


@Injectable({
  providedIn: 'root'
})
export class PostsFormService {

  constructor(private fb: FormBuilder) { }

  formCreatePost(){
    return{
      form: this.fb.group({
        title:       TitleModel.validation,
        file:        ImageModel.validation,
        description: DescriptionModel.validation
      }),
      TitleModel,
      ImageModel,
      DescriptionModel 
    } 
  }
}
