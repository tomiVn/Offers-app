import { Validators } from "@angular/forms";
import { EMAIL_REGEX, NOT_VALID_CHARACTERS } from "../utils/const";
import { emailPattern, maxLength, minLength, numbersPattern, passwordsMatch, requiredField, specialCharactersPattern } from "../utils/errorsMessages";
import { fileSizeValidator, fileTypeValidator } from "../utils/imageValidation";
import { countryCodeValidator } from "../utils/validateCountryCode";

export const nameModel = {

      elementName: 'name',
     elementLabel: 'Names',
      elementType: 'text',
    minimalLength:  3, 

       validation:  ['', [ 
                      Validators.required, 
                      Validators.minLength(3), 
                      Validators.pattern(NOT_VALID_CHARACTERS)]],

           errors:  [ requiredField('Name'), 
                      minLength(3), 
                      specialCharactersPattern('< >') ] 
}

export const emailModel = {

    elementName: 'email',
   elementLabel: '@Email',
    elementType: 'email',
  minimalLength:  6, 
     validation:  ['', [ 
                    Validators.required, 
                    Validators.minLength(6),
                    Validators.pattern(EMAIL_REGEX) ]],

         errors:  [ requiredField('@Email'), 
                    minLength(6), 
                    emailPattern('@Email') ]       
}

export const passwordModel = {

   elementName: 'password',
  elementLabel: 'Password',
   elementType: 'password',
 minimalLength:  4, 
    validation: ['', [ 
                  Validators.required,
                  Validators.minLength(4),
                  Validators.pattern(NOT_VALID_CHARACTERS)]],

       errors: [  requiredField('Password'), 
                  minLength(4), 
                  specialCharactersPattern('< >') ] 
}

export const repeatPasswordModel = { 
     elementName: 'repeatPass',
    elementLabel: 'Repeat password',
     elementType: 'password',
   minimalLength:  4,
      validation: ['', [
                     Validators.required,
                     Validators.minLength(4),]],

          errors: [ requiredField('Repeat-password'), 
                    minLength(4), 
                    passwordsMatch() ]       
}

export const phoneModel = {
 
      elementName: 'phone',
     elementLabel: 'Phone',
      elementType: 'number', 
    minimalLength:  6, 
       validation:  ['', [ 
                      Validators.required,
                      Validators.minLength(6),
                      Validators.maxLength(12),
                      Validators.pattern("^[0-9]*$") ]],

           errors:  [ requiredField('Phone'), 
                      minLength(6), 
                      maxLength(12), 
                      numbersPattern() ] 
}

export const dialCodeModel = {

  validation: ['', [ Validators.required, 
                     countryCodeValidator ]]
}

export const dateModel = {
    validation: ['', [ ]],
}

export const genderModel = {
    validation: ['', []]
}

export const imageModel = {
    validation: ['', [ fileSizeValidator(), 
                       fileTypeValidator() ]]
}

export const titleModel = {
      elementName: 'title',
     elementLabel: 'Title',
      elementType: 'string', 
    minimalLength:  3, 
       validation:  ['', [ 
                      Validators.required,
                      Validators.minLength(3),
                      Validators.pattern(NOT_VALID_CHARACTERS) ]],

           errors:  [ requiredField('Title'), 
                      minLength(3), 
                      specialCharactersPattern('< >') ]
}

export const descriptionModel = {
   validation: ['',[ Validators.pattern(NOT_VALID_CHARACTERS) ]]
}