import { Injectable } from '@angular/core';
import { FormBuilder  } from '@angular/forms';
import { DateModel } from 'src/app/models/form-elements-models/dateModel';
import { DescriptionModel } from 'src/app/models/form-elements-models/descriptionModel';
import { ImgModel } from 'src/app/models/form-elements-models/imgModel';
import { OfferContactModel } from 'src/app/models/form-elements-models/offerContactsModel';
import { PricenModel } from 'src/app/models/form-elements-models/priceModel';
import { TitleModel } from 'src/app/models/form-elements-models/titleModel';
import { buildFormFunction } from 'src/app/utils/build-form';

@Injectable({
  providedIn: 'root'
})
export class OffersFormService {

  constructor ( private fb: FormBuilder ) { }

  getOffers() {

    let ModelsData = {
        DateModel
    }

    return {
      ...ModelsData,
      form: this.fb.group( buildFormFunction( ModelsData ))
    } 
  }

  createOffer(){  
    
    const UntilDateModel = Object.assign(() => {}, DateModel);
      UntilDateModel.setElementName('untilDate');
      UntilDateModel.setElementLabel('Until date');
      DateModel.setElementName('fromDate');
      DateModel.setElementLabel('Valid from Date');

    let ModelsData = {
        TitleModel,
        ImgModel,
        DescriptionModel,
        OfferContactModel,
        PricenModel,
        DateModel,
        UntilDateModel
      }

    return {      
      ...ModelsData,   
      form: this.fb.group ( buildFormFunction( ModelsData ))
    }
  }
}