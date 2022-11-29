import { Validators } from "@angular/forms";
import { maxLength, minLength, numbersPattern, requiredField } from "src/app/utils/errorsMessages";

export const PhoneModel = {
 
    elementName: 'phone',
   elementLabel: 'Phone',
    elementType: 'number', 
  minimalLength:  6,
         values: '', 
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