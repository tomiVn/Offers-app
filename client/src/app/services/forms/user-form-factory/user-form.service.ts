import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BornModel } from 'src/app/models/formElementsModels.ts/bornModel';
import { DialCodeModel } from 'src/app/models/formElementsModels.ts/dialCountryCodeModel';
import { GenderModel } from 'src/app/models/formElementsModels.ts/genderModel';
import { ImgModel } from 'src/app/models/formElementsModels.ts/imgModel';
import { NameModel } from 'src/app/models/formElementsModels.ts/nameModel';
import { PhoneModel } from 'src/app/models/formElementsModels.ts/phoneModel';


@Injectable({
  providedIn: 'root'
})
export class UserFormService {

  constructor(private fb: FormBuilder) { }

  formUserDetails() {
    return{
      form: this.fb.group({      
        name:     NameModel.validation,
        gender:   GenderModel.validation,
        born:     BornModel.validation,
        dialCode: DialCodeModel.validation,
        phone:    PhoneModel.validation
      }),
      NameModel,
      GenderModel,
      BornModel,
      DialCodeModel,
      PhoneModel
    } 
  }

  
  formProfileImage(){
    return{
      form: this.fb.group({
        image: ImgModel.validation
      }),
      ImgModel
    }
  }
}
