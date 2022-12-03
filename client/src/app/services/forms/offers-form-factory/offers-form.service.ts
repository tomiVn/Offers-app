import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DateModel } from 'src/app/models/form-elements-models/date-picker/dateModel';
import { FromDateModel, UntilDateModel } from 'src/app/models/form-elements-models/date-picker/form-date-factory-function';
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
   return{ 
      TitleModel,
      ImgModel,
      DescriptionModel,
      PricenModel,
      FromDateModel,
      UntilDateModel,
      
    form: this.fb.group({
      title: TitleModel.validation,
      image: ImgModel.validation,
      description: DescriptionModel.validation,
      price: PricenModel.validation,
      fromDate: DateModel.validation,
      untilDate: UntilDateModel.validation
      })
    }
  }
}
