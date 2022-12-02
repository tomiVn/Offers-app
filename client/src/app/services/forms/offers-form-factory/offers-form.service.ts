import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DateModel } from 'src/app/models/formElementsModels.ts/dateModel';


@Injectable({
  providedIn: 'root'
})
export class OffersFormService {

  constructor(private fb: FormBuilder) { }

  getOffers(){
    return{
      form: this.fb.group({
        date: DateModel.validation
      }),
      DateModel
    } 
  }
}
