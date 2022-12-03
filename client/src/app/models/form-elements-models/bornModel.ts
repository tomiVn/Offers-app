import { AbstractControl } from "@angular/forms";
import { customError } from "./utils/errorsMessages";
import { FormFactoryFunction } from "./utils/form-factory-function";

export const BornModel = FormFactoryFunction
  ('born', 'Born date', '', 0, null, 
    ['', 
      [
        bornValidationDate
      ]
    ], 
    [
      customError('bornFutureDateError', `Date can't be in the future!`), 
      customError('bornPastDateError', `Date can't be more than 100 years ago!`)
    ]
  );

function bornValidationDate(control: AbstractControl){

  let value = new Date(control.value);
  let date  = new Date();
 
  if (value == null) {
      return;
  }
  
  if(value > date){ 

    return { bornFutureDateError: true };

  }else if(value < subtractYears(100, date)){

    return { bornPastDateError: true };
  }
  
  return null;
}

function subtractYears(numOfYears: number, date: Date) {

  const dateCopy = new Date(date.getTime());
        dateCopy.setFullYear(dateCopy.getFullYear() - numOfYears);

  return dateCopy;
}