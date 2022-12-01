import { Validators } from "@angular/forms";
import { NOT_VALID_CHARACTERS } from "src/app/utils/const";
import { minLength, requiredField, specialCharactersPattern } from "src/app/utils/errorsMessages";

export const TitleModel = {
    elementName: 'title',
   elementLabel: 'Title',
    elementType: 'string', 
  minimalLength:  3,
           data: '', 
     validation:  ['', [ 
                    Validators.required,
                    Validators.minLength(3),
                    Validators.pattern(NOT_VALID_CHARACTERS) ]],

         errors:  [ requiredField('Title'), 
                    minLength(3), 
                    specialCharactersPattern('< >') ]
}