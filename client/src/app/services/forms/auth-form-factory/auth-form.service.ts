import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EmailModel } from 'src/app/models/form-elements-models/emailModel';
import { NameModel } from 'src/app/models/form-elements-models/nameModel';
import { isPasswordsMatch, PasswordModel, RepeatPasswordModel } from 'src/app/models/form-elements-models/passwordModel';



@Injectable({
  providedIn: 'root'
})
export class AuthFormService {

  constructor(private fb: FormBuilder) { }

  getRegisterForm() {
    return{
      NameModel,
      EmailModel,
      PasswordModel,
      RepeatPasswordModel,
      
      form: this.fb.group({      
        name: NameModel.validation,                                        
        email: EmailModel.validation,
        password: PasswordModel.validation,
        repeatPass: RepeatPasswordModel.validation,
        },
        { validators: isPasswordsMatch('password', 'repeatPass')
      })
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
}
