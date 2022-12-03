import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EmailModel } from 'src/app/models/form-elements-models/emailModel';
import { NameModel } from 'src/app/models/form-elements-models/nameModel';
import { isPasswordsMatch, PasswordModel } from 'src/app/models/form-elements-models/passwordModel';

@Injectable({
  providedIn: 'root'
})
export class AuthFormService {

  constructor(private fb: FormBuilder) { }

  getRegisterForm() {

    let RepeatPasswordModel = Object.assign({}, PasswordModel);
        RepeatPasswordModel.setElementName('repeatPass');
        RepeatPasswordModel.setElementLabel('Repeat password');

    return {
      NameModel,
      EmailModel,
      PasswordModel,
      RepeatPasswordModel,
      
      form: this.fb.group(
        {      
        name:       NameModel.validation,                                        
        email:      EmailModel.validation,
        password:   PasswordModel.validation,
        repeatPass: RepeatPasswordModel.validation,
        },
        { 
          validators: isPasswordsMatch('password', 'repeatPass')
        }
      )
    } 
  }

  
  getLogIn(){
    return {

      EmailModel,
      PasswordModel,

      form: this.fb.group(
        {
          email:    EmailModel.validation,
          password: PasswordModel.validation
        }
      )
    } 
  }
}
