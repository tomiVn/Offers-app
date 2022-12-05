import { Injectable } from '@angular/core';
import { FormBuilder  } from '@angular/forms';
import { DateModel, FromDateModel, UntilDateModel } from 'src/app/models/form-elements-models/dateModel';
import { DescriptionModel } from 'src/app/models/form-elements-models/descriptionModel';
import { ImgModel } from 'src/app/models/form-elements-models/imgModel';
import { OfferContactModel } from 'src/app/models/form-elements-models/offerContactsModel';
import { PriceModel } from 'src/app/models/form-elements-models/priceModel';
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
  
    let ModelsData = {
        TitleModel,
        ImgModel,
        DescriptionModel,
        OfferContactModel,
        PriceModel,
        FromDateModel,
        UntilDateModel
      }

    return {      
      models: ModelsData,   
      form: this.fb.group ( buildFormFunction( ModelsData )),
      
    }
  }
}