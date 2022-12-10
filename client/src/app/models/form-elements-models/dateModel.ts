import { AbstractControl, FormGroup, Validators } from "@angular/forms";
import { customError } from "./utils/errorsMessages";
import { FormElementFactoryFunction } from "./utils/form-element-factory";

export const DateModel = FormElementFactoryFunction
    ('date', 'Date', 'date', 0, '', ['', []], []);
     
export const FromDateModel = FormElementFactoryFunction
    ('fromDate', 'Date', 'date', 0, '', 
        ['', [isDatePast]], 
        [ customError('dateIsPast', 'Date is past!!!')]);

export const UntilDateModel = FormElementFactoryFunction
    ('untilDate', 'Until date', 'date', 0, '', 
        ['', [isDatePast]], 
         [ customError('dateIsPast', 'Date is past!!!'), 
            customError('isCompareDatesNotValid', 'Until date must be greater than from date!!!')]);; 

export function isUntilGtThanFrom( fromDate: string, untilDate: string ){
    return (formgroup: FormGroup) => {
  
        let fromDateElement  = formgroup.controls[ fromDate ];
        let untilDateElement = formgroup.controls[ untilDate ];

        if ( untilDateElement.errors && !untilDateElement.errors[ 'isCompareDatesNotValid' ] ) {
            return;
          }
           
      return fromDateElement.value > untilDateElement.value 
        ? untilDateElement.setErrors({ isCompareDatesNotValid: true }) 
        : untilDateElement.setErrors( null );
      }
  }

  function isDatePast(control: AbstractControl){  

        let dateValue   = control.value;

        if( dateValue < new Date()){
            return { dateIsPast: true }
        }
        
    return null;
  }


