import { AbstractControl } from '@angular/forms';
import countriesData from '../constants/countries.json';
import { ICountry } from '../models/countryModel';

export function countryCodeValidator(control: AbstractControl) {
    
    let value = control.value;

    if (value == null) {
        return;
    }

    let index = countriesData.findIndex((i: ICountry) => i.dial_code == value.toString());
   

    if(index == -1){
       
     return { countruCodeError: true};
       
    }
    return null;
}