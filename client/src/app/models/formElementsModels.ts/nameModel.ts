import { Validators } from "@angular/forms";
import { NOT_VALID_CHARACTERS } from "src/app/utils/const";
import { minLength, requiredField, specialCharactersPattern } from "src/app/utils/errorsMessages";

export const NameModel = {

    elementName: 'name',
   elementLabel: 'Names',
    elementType: 'text',
  minimalLength:  3, 
         values:  null,
     validation:  ['', [ 
                    Validators.required, 
                    Validators.minLength(3), 
                    Validators.pattern(NOT_VALID_CHARACTERS)]],

         errors:  [ requiredField('Name'), 
                    minLength(3), 
                    specialCharactersPattern('< >') ] 
}