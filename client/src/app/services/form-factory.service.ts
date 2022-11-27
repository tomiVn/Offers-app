import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EMAIL_REGEX, NOT_VALID_CHARACTERS } from 'src/app/utils/const';
import { isPasswordsMatch } from '../utils/matchPasswords';
import { countryCodeValidator } from '../utils/validateCountryCode';
import { fileSizeValidator, fileTypeValidator } from '../utils/imageValidation';

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

repeatPassValidation = ['', []];
      
  dialCodeValidation = ['', [ Validators.required, 
                              countryCodeValidator ]];

     phoneValidation = ['', [ Validators.required,
                              Validators.minLength(6),
                              Validators.maxLength(12),
                              Validators.pattern("^[0-9]*$") ]];

      dateValidation = ['', [ ]];

    genderValidation = ['', []];

       imgValidation = ['', [ fileSizeValidator(), fileTypeValidator() ]];

     titleValidation = ['', [ Validators.required,
                              Validators.minLength(3),
                              Validators.pattern(NOT_VALID_CHARACTERS) ]];

descriptionValidation = ['',[ Validators.pattern(NOT_VALID_CHARACTERS) ]];

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

  getUpdateUserForm() {
    return this.fb.group({      
      name: this.nameValidation,
      gender: this.genderValidation,
      dialCode: this.dialCodeValidation,
      phone: this.phoneValidation,
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
      firstDay: this.dateValidation
    });
  }

  createPost(){
    return this.fb.group({
      title: this.titleValidation,
      file: this.imgValidation,
      description: this.descriptionValidation
    });
  }

}
