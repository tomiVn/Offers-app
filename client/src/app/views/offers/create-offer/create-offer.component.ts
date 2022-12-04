import { Component, ElementRef, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { IFormModel } from 'src/app/models/interfaces/formElementsInterface';
import { OfferService } from 'src/app/services/api/offers/offer.service';
import { OffersFormService } from 'src/app/services/forms/offers-form-factory/offers-form.service';

@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.less']
})
export class CreateOfferComponent implements OnInit {

  form!: FormGroup;

  titleModel:        IFormModel;
  imgModel!:         IFormModel;
  descriptionModel!: IFormModel;
  contactInfoModel!: IFormModel;
  priceModel!:       IFormModel;
  fromDateModel!:    IFormModel;
  untilDateModel!:   IFormModel;
  
  uploadVisibility = true;
  uploadImage: string | undefined;
  dateNow = new Date();

  constructor (
    private formFactoryService: OffersFormService,
    private offerApiService: OfferService,
    private ref: ElementRef,
    private toastr: ToastrService ) 
    {
      let formFactoryServiceData = this.formFactoryService.createOffer();
      this.form = formFactoryServiceData.form;

      this.titleModel       = formFactoryServiceData.TitleModel;
      this.imgModel         = formFactoryServiceData.ImgModel;
      this.descriptionModel = formFactoryServiceData.DescriptionModel;
      this.contactInfoModel = formFactoryServiceData.OfferContactModel;
      this.priceModel       = formFactoryServiceData.PricenModel;
      this.fromDateModel    = formFactoryServiceData.DateModel;
      this.untilDateModel   = formFactoryServiceData.UntilDateModel;
    }

  ngOnInit(): void { }

  actionForm(){
    
    if(this.form.valid){
      this.offerApiService.createOffer(this.form.value)
      .pipe(take(1))
      .subscribe();
    }
    
   }

  upload() {
    let filebutton = this.ref.nativeElement.querySelector('#upload');
    filebutton.click(); 
    this.toastr.info('Types JPEG / JPG / PNG | Limit 1MB!', 'Image in quadratic form!');
  }

  onImageSelected(img: string){
    this.uploadVisibility = !this.uploadVisibility; 
    this.uploadImage = img;      
  }

  cancel() {
    this.uploadVisibility = !this.uploadVisibility;
    this.uploadImage = undefined;
  }

}
