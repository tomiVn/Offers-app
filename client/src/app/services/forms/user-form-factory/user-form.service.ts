import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BornModel } from 'src/app/models/form-elements-models/bornModel';
import { GenderModel } from 'src/app/models/form-elements-models/genderModel';
import { ImgModel } from 'src/app/models/form-elements-models/imgModel';
import { NameModel } from 'src/app/models/form-elements-models/nameModel';
import { DialCodeModel, PhoneModel } from 'src/app/models/form-elements-models/phoneModel';
import { buildFormFunction } from 'src/app/utils/build-form';

@Injectable({
  providedIn: 'root'
})
export class UserFormService {

  constructor(private fb: FormBuilder) { }

  formUserDetails() {

    let ModelsData = {
      NameModel,
      GenderModel,
      BornModel,
      DialCodeModel,
      PhoneModel,
    }
    
    return{
      models: ModelsData,
      form: this.fb.group( buildFormFunction( ModelsData ))    
    } 
  }

  formProfileImage(){

    let ModelsData = {
      ImgModel,
    }

    return{
      models: ModelsData,
      form: this.fb.group( buildFormFunction( ModelsData ))     
    }
  }
}