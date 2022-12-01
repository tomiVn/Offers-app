import { Validators } from "@angular/forms";
import { NOT_VALID_CHARACTERS } from "src/app/utils/const";
import { specialCharactersPattern } from "src/app/utils/errorsMessages";

export const DescriptionModel = {
    elementName: 'description',
   elementLabel: 'Description',
    elementType: '',
  minimalLength:  0,
           data: '', 
     validation: ['',[ Validators.pattern(NOT_VALID_CHARACTERS) ]],
         errors: [specialCharactersPattern('< >')]
 }