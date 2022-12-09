import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, Observable, tap } from 'rxjs';
import { IFormModel } from 'src/app/models/interfaces/formElementsInterface';
import { IOffer } from 'src/app/models/interfaces/offerInterface';
import { ITokenPayload } from 'src/app/models/interfaces/tokenPayloadInterface';
import { OfferService } from 'src/app/services/api/offers/offer.service';
import { OffersFormService } from 'src/app/services/forms/offers-form-factory/offers-form.service';
import { TokenService } from 'src/app/services/token/token.service';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.component.html',
  styleUrls: ['./edit-offer.component.less']
})
export class EditOfferComponent implements OnInit {
  
  form!: FormGroup;
  FormModels!: { [s: string]: IFormModel; }; 
  
  offerDetails$: Observable< IOffer > | undefined;
  uploadVisibility: boolean = false;
  uploadImage: string | undefined;
  dateNow = new Date();
  user: ITokenPayload | undefined;

  constructor(
    private offerFormService: OffersFormService,
    private route: ActivatedRoute,
    private offersService: OfferService,
    private tokentService: TokenService,
    private router: Router) 
    {
      let formServiceData = this.offerFormService.createOffer();
      this.FormModels = formServiceData.models;
      this.form = formServiceData.form;
      this.user = this.tokentService.currentUser();
    }

  ngOnInit(): void {
    
    this.route.params.subscribe( params => {
      this.offerDetails$ = 
        this.offersService.GetOneOfferById( params['offerId'] )
        .pipe(
          tap( offer => {
            if(offer.creator.toString() !== this.user?.id){
              this.router.navigate(['/notfound']);
            }
          }
        ),
        delay(600));
    });
  }

  actionForm(){

  }

  upload(){

  }

  onImageSelected($event: string){

  }

  cancel(){

  }

}
