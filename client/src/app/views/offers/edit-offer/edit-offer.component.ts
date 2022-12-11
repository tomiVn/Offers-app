import { Component, ElementRef, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { delay, Observable, take, tap } from 'rxjs';
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
    private router: Router,
    private ref: ElementRef,
    private toastr: ToastrService) 
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
            if( offer.creator._id.toString() !== this.user?.id ){
              this.router.navigate(['/notfound']);
              return; 
            }
            this.uploadImage = offer.image
          }
        ),
        delay(600));
    });
  }

  actionForm(offerId: string){

    if( this.form.valid )
    {
      this.offersService.UpdateOffer( this.form.value, offerId )
        .pipe(take(1),
        tap(r => {
          this.toastr.success(r.message);
          this.router.navigate(['/offers/' + offerId + '/view'])
      }))
      .subscribe();
    }    
  }

  upload()
  {
    let filebutton = this.ref.nativeElement.querySelector('#upload');
    filebutton.click(); 
    this.toastr.info('Types JPEG / JPG / PNG | Limit 1MB!', 'Image in quadratic form!');
    return;
  }

  onImageSelected(img: string)
  {
    this.uploadVisibility = !this.uploadVisibility; 
    this.uploadImage = img; 
  }

  cancel() 
  {
    this.uploadVisibility = !this.uploadVisibility;
    this.uploadImage = undefined;
  }

}
