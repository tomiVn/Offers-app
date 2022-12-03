import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BornModel } from 'src/app/models/form-elements-models/bornModel';
import { GenderModel } from 'src/app/models/form-elements-models/genderModel';
import { ImgModel } from 'src/app/models/form-elements-models/imgModel';
import { NameModel } from 'src/app/models/form-elements-models/nameModel';
import { DialCodeModel, PhoneModel } from 'src/app/models/form-elements-models/phoneModel';

@Injectable({
  providedIn: 'root'
})
export class UserFormService {

  constructor(private fb: FormBuilder) { }

  formUserDetails() {
    
    return{
      
      NameModel,
      GenderModel,
      BornModel,
      DialCodeModel,
      PhoneModel,

      form: this.fb.group({      
        name:     NameModel.validation,
        gender:   GenderModel.validation,
        born:     BornModel.validation,
        dialCode: DialCodeModel.validation,
        phone:    PhoneModel.validation
      })    
    } 
  }

  
  formProfileImage(){
    return{

      ImgModel,

      form: this.fb.group({
        image: ImgModel.validation
      })     
    }
  }
}