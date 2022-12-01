import { AbstractControl, Validators } from "@angular/forms";
import countries from "src/app/utils/data/countries.json";
import { requiredField } from "src/app/utils/errorsMessages";
import { IAutoComplete } from "../interfaces/autocompleteModel";

export const DialCodeModel = {
    elementName:  'dialCode',
    elementLabel: 'Country code',
    elementType:  '',
    minimalLength:  0,
         values: countries,
     validation: ['', [ Validators.required, countryCodeValidator ]],
         errors: [ requiredField('Country code'), dialCodeError()] 
  }
  
  export function countryCodeValidator(control: AbstractControl) {
    
    let value = control.value;

    if (value == null) {
        return;
    }

    let index = countries.findIndex((i: IAutoComplete) => i.value == value.toString());
   

    if(index == -1){
       
     return { countruCodeError: true};
       
    }
    return null;
}

export function dialCodeError(){    
    return {
        name: 'countruCodeError',
        message: 'Country code is not valid!'
    }
}