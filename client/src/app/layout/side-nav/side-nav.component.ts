import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IFormModel } from 'src/app/models/interfaces/formElementsInterface';
import { OffersFormService } from 'src/app/services/forms/offers-form-factory/offers-form.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.less']
})
export class SideNavComponent implements OnInit {

  formOffers!: FormGroup;
  offersModel: IFormModel;
  curentDate = new Date();
  constructor(private offersFormFactory: OffersFormService) {
    let formServiceData = this.offersFormFactory.getOffers();
    this.formOffers  = formServiceData.form;
    this.offersModel = formServiceData.DateModel;
   }

  ngOnInit(): void {}

  onSubmit(){
    
  }

}
