import { Validators } from "@angular/forms";
import { EMAIL_REGEX } from "src/app/utils/const";
import { emailPattern, minLength, requiredField } from "src/app/utils/errorsMessages";

export const EmailModel = {

    elementName: 'email',
   elementLabel: '@Email',
    elementType: 'email',
  minimalLength:  6,
         values: '', 
     validation:  ['', [ 
                    Validators.required, 
                    Validators.minLength(6),
                    Validators.pattern(EMAIL_REGEX) ]],

         errors:  [ requiredField('@Email'), 
                    minLength(6), 
                    emailPattern('@Email') ]       
}