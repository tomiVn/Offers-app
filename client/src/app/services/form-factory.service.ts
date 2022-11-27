import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { isPasswordsMatch } from '../utils/matchPasswords';
import { emailModel, nameModel, passwordModel, repeatPasswordModel, phoneModel, dialCodeModel, genderModel, dateModel, titleModel, imageModel, descriptionModel } from '../models/formElemetsModel';

@Injectable({
  providedIn: 'root'
})
export class FormFactoryService {

  constructor(private fb: FormBuilder) { }

  getRegisterForm() {
    return this.fb.group({      
         name: nameModel.validation,                                        
        email: emailModel.validation,
     password: passwordModel.validation,
   repeatPass: repeatPasswordModel.validation,
     dialCode: dialCodeModel.validation,
        phone: phoneModel.validation,
    },
    {
   validators: isPasswordsMatch('password', 'repeatPass')
    });
  }

  getUpdateUserForm() {
    return this.fb.group({      
         name: nameModel.validation,
       gender: genderModel.validation,
     dialCode: dialCodeModel.validation,
        phone: phoneModel.validation
    });
  }

  getLogIn(){
    return this.fb.group({
        email: emailModel.validation,
     password: passwordModel.validation
    });
  }

  getDateArange(){
    return this.fb.group({
     firstDay: dateModel.validation
    });
  }

  createPost(){
    return this.fb.group({
        title: titleModel.validation,
         file: imageModel.validation,
  description: descriptionModel.validation
    });
  }

}
