import { AbstractControl, Validators } from "@angular/forms";
import { ONLY_NUMBERS } from "src/app/utils/const";
import { IAutoComplete } from "../interfaces/autocompleteModel";
import countries from "./utils/data/countries.json";
import { maxLength, minLength, patternError, requiredField } from "./utils/errorsMessages";
import { FormElementFactoryFunction } from "./utils/form-element-factory";

export const PhoneModel = FormElementFactoryFunction
  ('phone', 'Phone', 'number', 6, '',
    ['', 
      [ 
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12),
        Validators.pattern("^[0-9]*$") 
      ]
    ],
    [ 
      requiredField('Phone'), 
      minLength(6), 
      maxLength(12), 
      patternError( ONLY_NUMBERS ) 
    ] 
  );

export const DialCodeModel = FormElementFactoryFunction
  ('dialCode', 'Country code', '', 0, countries,    
    ['', 
      [ 
        Validators.required, 
        countryCodeValidator 
      ]
    ],   
    [ 
      requiredField('Country code'), 
      dialCodeError()
    ]
  )

export function countryCodeValidator(control: AbstractControl) {
  
  let value = control.value;

  if (value == null) {
      return;
  }

  let index = countries.findIndex((i: IAutoComplete) => i.value == value.toString());
 
  if(index == -1){    
   return { countruCodeError: true };     
  }

  return null;
}

export function dialCodeError(){    
  return {
    name: 'countruCodeError',
    message: 'Country code is not valid!'
  }
}