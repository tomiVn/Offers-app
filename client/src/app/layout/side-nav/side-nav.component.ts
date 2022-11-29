import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IFormModel } from 'src/app/models/interfaces/formElementsInterface';
import { FormFactoryService } from 'src/app/services/form-factory.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.less']
})
export class SideNavComponent implements OnInit {

  formOffers!: FormGroup;
  offersModel: IFormModel;
  curentDate = new Date();
  constructor(private formService: FormFactoryService) {
    let formServiceData = this.formService.getDateArange();
    this.formOffers  = formServiceData.form;
    this.offersModel = formServiceData.DateModel;
   }

  ngOnInit(): void {}

  onSubmit(){
    
  }

}
