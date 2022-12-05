import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EmailModel } from 'src/app/models/form-elements-models/emailModel';
import { NameModel } from 'src/app/models/form-elements-models/nameModel';
import { isPasswordsMatch, PasswordModel, RepeatPasswordModel } from 'src/app/models/form-elements-models/passwordModel';
import { buildFormFunction } from 'src/app/utils/build-form';

@Injectable({
  providedIn: 'root'
})
export class AuthFormService {

  constructor(private fb: FormBuilder) { }

  getRegisterForm() {

    let ModelsData = {
      NameModel,
      EmailModel,
      PasswordModel,
      RepeatPasswordModel
    }
    
    return {
      models: ModelsData,      
      form: this.fb.group( buildFormFunction( ModelsData ),
        { 
          validators: isPasswordsMatch( PasswordModel.elementName, RepeatPasswordModel.elementName )
        }
      )
    } 
  }

  
  getLogIn(){

    let ModelsData = {
      EmailModel,
      PasswordModel
    }

    return {
      models: ModelsData,
      form: this.fb.group( buildFormFunction( ModelsData ))
    } 
  }
}
