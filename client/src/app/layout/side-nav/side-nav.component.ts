import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IFormModel } from 'src/app/models/interfaces/formElementsInterface';
import { OffersFormService } from 'src/app/services/forms/offers-form-factory/offers-form.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.less']
})
export class SideNavComponent implements OnInit {

  form!: FormGroup;
  FormModels: { [s: string]: IFormModel; };
  curentDate = new Date();

  constructor ( 
    private offersFormFactory: OffersFormService,
    private router: Router ) 
    {
      let formServiceData = this.offersFormFactory.getOffers();
      this.form  = formServiceData.form;
      this.FormModels = formServiceData.models;
   }

  ngOnInit(): void {}

  onSubmit(){

    if(this.form.valid){
      
      let date = new Date(this.form.get('date')?.value).toISOString();

      this.router.navigate( ['/offers'], { queryParams: { date } })
    }
  }
}
