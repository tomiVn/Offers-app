import { AbstractControl } from "@angular/forms";

export const BornModel = {
    elementName: 'born',
   elementLabel: 'Born date',
    elementType: '',
  minimalLength:  0, 
         values: null,
     validation: ['', [bornValidationDate ]],
         errors: [errorBornDate(), errorLimitBornDate()] 
}

function bornValidationDate(control: AbstractControl){

  let value = new Date(control.value);
  let date  = new Date();
 
  if (value == null) {
      return;
  }
  
  if(value > date){ 
   return { 
      bornFutureDateError: true
  };  
  }else if(value < subtractYears(100, date)){
    return { 
      bornPastDateError: true
    };
  }
  
  return null;
}

function subtractYears(numOfYears: number, date: Date) {
  const dateCopy = new Date(date.getTime());
    dateCopy.setFullYear(dateCopy.getFullYear() - numOfYears);
  return dateCopy;
}

function errorBornDate(){
  return{
      name: 'bornFutureDateError',
      message: `Date can't be in the future!`
  }
}

function errorLimitBornDate(){
  return{
      name: 'bornPastDateError',
      message: `Date can't be more than 100 years ago!`
  }
}
