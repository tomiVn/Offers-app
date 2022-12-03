import { Validators } from "@angular/forms";
import { NOT_VALID_CHARACTERS, SPECIAL_CHARACTERS_ARE_NOT_ALLOOWED } from "src/app/utils/const";
import { customError, minLength, patternError, requiredField } from "./utils/errorsMessages";
import { FormFactoryFunction } from "./utils/form-factory-function";
import { FormGroup } from "@angular/forms";

export const PasswordModel = FormFactoryFunction
  ('password', 'Password', 'password', 4, '',

    ['', 
      [ 
        Validators.required,
        Validators.minLength(4),
        Validators.pattern(NOT_VALID_CHARACTERS)
      ]
    ],

    [  
      requiredField('Password'), 
      minLength(4), 
      patternError( SPECIAL_CHARACTERS_ARE_NOT_ALLOOWED ) 
    ]   
  )

export const RepeatPasswordModel = FormFactoryFunction
  ('repeatPass', 'Repeat password', 'password', 4, '',  
    ['', 
      [
        Validators.required,
        Validators.minLength(4)
      ]
    ],
    [ 
      requiredField('Repeat-password'), 
      minLength(4), 
      customError('isPasswordsNotMatch', 'Passwords not match!') 
    ]
  )

export function isPasswordsMatch(password: string, repeatPass: string) {
  
  return (formgroup: FormGroup) => {
  
    let pass   = formgroup.controls[ password ];
    let repass = formgroup.controls[ repeatPass ];
  
    if ( repass.errors && !repass.errors[ 'isPasswordsNotMatch' ] ) {
      return;
    }
         
  return pass.value !== repass.value 
    ? repass.setErrors({ 'isPasswordsNotMatch': true }) 
    : repass.setErrors( null );
  }
  
}
 