import { Validators } from "@angular/forms";
import { NOT_VALID_CHARACTERS } from "src/app/utils/const";
import { minLength, passwordsMatch, requiredField, specialCharactersPattern } from "src/app/utils/errorsMessages";

export const PasswordModel = {

    elementName: 'password',
   elementLabel: 'Password',
    elementType: 'password',
  minimalLength:  4,
         values: '', 
     validation: ['', [ 
                   Validators.required,
                   Validators.minLength(4),
                   Validators.pattern(NOT_VALID_CHARACTERS)]],
 
        errors: [  requiredField('Password'), 
                   minLength(4), 
                   specialCharactersPattern('< >') ] 
 }

 export const RepeatPasswordModel = { 
  elementName: 'repeatPass',
 elementLabel: 'Repeat password',
  elementType: 'password',
minimalLength:  4,
       values: '',
   validation: ['', [
                  Validators.required,
                  Validators.minLength(4),]],

       errors: [ requiredField('Repeat-password'), 
                 minLength(4), 
                 passwordsMatch() ]       
}