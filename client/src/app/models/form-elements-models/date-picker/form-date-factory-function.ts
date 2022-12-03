import { AbstractControl, Validators } from "@angular/forms";

function FormDateFactoryFunction(
    elementName:   string, 
    elementLabel:  string, 
    elementType:   string,
    minimalLength: number,
    data: any,
    validation: any,
    errors: any){ 
    
    return {
        elementName,
        elementLabel,
        elementType,
        minimalLength, 
        data,
        validation,
        errors,
    }
}

export const FromDateModel = FormDateFactoryFunction
  ('fromDate', 'From date', 'Date', 0, '', [], []);

export const UntilDateModel = FormDateFactoryFunction 
  ('untilDate', 'Until date', 'Date', 0, '', ['', Validators.required], []);

function futureLimitDate(control: AbstractControl, date: Date){

    let value = new Date(control.value);
    let limitDate  = new Date(date);
   
    if (value == null) {
        return;
    }
    
    if(value > limitDate){ 
     return { futureDateError: true } 
    }  
    return null;
  }

  function pastLimitDate(control: AbstractControl, date: Date){

    let value = new Date(control.value);
    let limitDate  = new Date(date);
   
    if (value == null) {
        return;
    }
    
    if(value < limitDate){ 
     return { pastDateError: true } 
    }  
    return null;
  }
  
  function futureDateError(date: Date){
    return{
        name: 'futureDateError',
        message: `Please select date until ${date}`
    }
  }
  
  function pastDateError(date: Date){
    return{
        name: 'pastDateError',
        message: `Please select date until ${date}`
    }
  }