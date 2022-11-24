import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EMAIL_REGEX, NOT_VALID_CHARACTERS } from 'src/app/utils/const';
import { isPasswordsMatch } from '../utils/matchPasswords';
import { countryCodeValidator } from '../utils/validateCountryCode';
import { fileSizeValidator } from '../utils/validateFileSize';
import { fileTypeValidator } from '../utils/validateFileType';

@Injectable({
  providedIn: 'root'
})
export class FormFactoryService {

      nameValidation = ['', [ Validators.required, 
                              Validators.minLength(3),
                              Validators.pattern(NOT_VALID_CHARACTERS)]];

     emailValidation = ['', [ Validators.required,
                              Validators.minLength(6),
                              Validators.pattern(EMAIL_REGEX) ]];

  passwordValidation = ['', [ Validators.required,
                              Validators.minLength(4),
                              Validators.pattern(NOT_VALID_CHARACTERS)]];

repeatPassValidation = ['', [ Validators.required ]];
      
  dialCodeValidation = ['', [ Validators.required, 
                              countryCodeValidator ]];

     phoneValidation = ['', [ Validators.required,
                              Validators.pattern("^[0-9]*$"),
                              Validators.minLength(6),
                              Validators.maxLength(12) ]];

      dateValidation = ['', [ Validators.required ]];

       imgValidation = ['', [ fileSizeValidator(), fileTypeValidator() ]];

     titleValidation = ['', [ Validators.required,
                              Validators.minLength(3),
                              Validators.pattern(NOT_VALID_CHARACTERS) ]];

descriptionValidation = ['', [ Validators.pattern(NOT_VALID_CHARACTERS) ]];

  constructor(private fb: FormBuilder) { }

  getRegisterForm() {
    return this.fb.group({      
      name: this.nameValidation,                                        
      email: this.emailValidation,
      password: this.passwordValidation,
      repeatPass: this.repeatPassValidation,
      dialCode: this.dialCodeValidation,
      phone: this.phoneValidation,
    },
    {
      validators: isPasswordsMatch('password', 'repeatPass')
    });
  }

  getLogIn(){
    return this.fb.group({
      email: this.emailValidation,
      password: this.passwordValidation,
    });
  }

  getDateArange(){
    return this.fb.group({
      firstDay: this.dateValidation,
      lastDay: this.dateValidation,
    });
  }

  createPost(){
    return this.fb.group({
      title: this.titleValidation,
      description: this.descriptionValidation,
      file: this.imgValidation,
    });
  }

}
