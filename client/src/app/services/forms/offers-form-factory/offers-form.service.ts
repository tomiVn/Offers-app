import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DateModel } from 'src/app/models/form-elements-models/dateModel';
import { DescriptionModel } from 'src/app/models/form-elements-models/descriptionModel';
import { ImgModel } from 'src/app/models/form-elements-models/imgModel';
import { PricenModel } from 'src/app/models/form-elements-models/priceModel';
import { TitleModel } from 'src/app/models/form-elements-models/titleModel';



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

  createOffer(){  
    
    const UntilDateModel = Object.assign(() => {}, DateModel);
      UntilDateModel.setElementName('untilDate');
      UntilDateModel.setElementLabel('Until date');

    return { 
      TitleModel,
      ImgModel,
      DescriptionModel,
      PricenModel,
      DateModel,
      UntilDateModel,
       
      form: this.fb.group (
       {
        title:       TitleModel.validation,
        image:       ImgModel.validation,
        description: DescriptionModel.validation,
        price:       PricenModel.validation,
        date:        DateModel.validation,
        untilDate:   UntilDateModel.validation
        }
      )
    }
  }
}
