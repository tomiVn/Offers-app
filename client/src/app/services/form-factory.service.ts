import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BornModel } from '../models/formElementsModels.ts/bornModel';
import { DateModel } from '../models/formElementsModels.ts/dateModel';
import { DescriptionModel } from '../models/formElementsModels.ts/descriptionModel';
import { DialCodeModel } from '../models/formElementsModels.ts/dialCountryCodeModel';
import { EmailModel } from '../models/formElementsModels.ts/emailModel';
import { GenderModel } from '../models/formElementsModels.ts/genderModel';
import { ImageModel } from '../models/formElementsModels.ts/imageModel';
import { ImgModel } from '../models/formElementsModels.ts/imgModel';
import { NameModel } from '../models/formElementsModels.ts/nameModel';
import { PasswordModel, RepeatPasswordModel } from '../models/formElementsModels.ts/passwordModel';
import { PhoneModel } from '../models/formElementsModels.ts/phoneModel';
import { TitleModel } from '../models/formElementsModels.ts/titleModel';

import { isPasswordsMatch } from '../utils/validations/matchPasswords';

@Injectable({
  providedIn: 'root'
})
export class FormFactoryService {

  constructor(private fb: FormBuilder) { }

  getRegisterForm() {
    return{
      form: this.fb.group({      
        name: NameModel.validation,                                        
        email: EmailModel.validation,
        password: PasswordModel.validation,
        repeatPass: RepeatPasswordModel.validation,
        },
        { validators: isPasswordsMatch('password', 'repeatPass')
      }),
      NameModel,
      EmailModel,
      PasswordModel,
      RepeatPasswordModel
    } 
  }

  getUserForm() {
    return{
      form: this.fb.group({      
        name:     NameModel.validation,
        gender:   GenderModel.validation,
        born:     BornModel.validation,
        dialCode: DialCodeModel.validation,
        phone:    PhoneModel.validation
      }),
      NameModel,
      GenderModel,
      BornModel,
      DialCodeModel,
      PhoneModel
    } 
  }

  getLogIn(){
    return{
      form: this.fb.group({
        email:    EmailModel.validation,
        password: PasswordModel.validation
      }),
      EmailModel,
      PasswordModel
    } 
  }

  getDateArange(){
    return{
      form: this.fb.group({
        date: DateModel.validation
      }),
      DateModel
    } 
  }

  createPost(){
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

  updateProfileImage(){
    return{
      form: this.fb.group({
        image: ImgModel.validation
      }),
      ImgModel
    }
  }

}
