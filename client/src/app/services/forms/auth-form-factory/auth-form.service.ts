import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EmailModel } from 'src/app/models/formElementsModels.ts/emailModel';
import { NameModel } from 'src/app/models/formElementsModels.ts/nameModel';
import { PasswordModel, RepeatPasswordModel } from 'src/app/models/formElementsModels.ts/passwordModel';
import { isPasswordsMatch } from 'src/app/utils/validations/matchPasswords';


@Injectable({
  providedIn: 'root'
})
export class AuthFormService {

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
