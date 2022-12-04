import { Injectable } from '@angular/core';
import { FormBuilder  } from '@angular/forms';
import { DateModel } from 'src/app/models/form-elements-models/dateModel';
import { ImgModel } from 'src/app/models/form-elements-models/imgModel';
import { DescriptionModel } from 'src/app/models/form-elements-models/new-model/newFormModel';
import { OfferContactModel } from 'src/app/models/form-elements-models/offerContactsModel';
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
      DateModel.setElementName('fromDate');
      DateModel.setElementLabel('Valid from Date');
  
    return { 
      TitleModel,
      ImgModel,
      DescriptionModel,
      OfferContactModel,
      PricenModel,
      DateModel,
      UntilDateModel,
       
      form: this.fb.group (
       {
        title:       TitleModel.validation,
        image:       ImgModel.validation,
        description: DescriptionModel.validation,
        contactInfo: OfferContactModel.validation,
        price:       PricenModel.validation,
        fromDate:    DateModel.validation,
        untilDate:   UntilDateModel.validation
        }
      )
    }
  }
}
