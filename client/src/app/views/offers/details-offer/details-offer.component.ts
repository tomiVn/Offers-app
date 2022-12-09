import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { delay, Observable, Subscription, take, tap } from 'rxjs';
import { IOffer } from 'src/app/models/interfaces/offerInterface';
import { ITokenPayload } from 'src/app/models/interfaces/tokenPayloadInterface';
import { OfferService } from 'src/app/services/api/offers/offer.service';
import { TokenService } from 'src/app/services/token/token.service';

@Component({
  selector: 'app-details-offer',
  templateUrl: './details-offer.component.html',
  styleUrls: ['./details-offer.component.less']
})
export class DetailsOfferComponent implements OnInit {

  offerDetails$: Observable< IOffer > | undefined;
  routeSub: Subscription | undefined;
  isUser: boolean;
  curentUser: ITokenPayload | undefined;
  isInWatchList: boolean = false;

  constructor(
    private offersService: OfferService,
    private route: ActivatedRoute,
    private tokenService: TokenService,
    private toastr: ToastrService,
    private router: Router) 
      {
        this.isUser = tokenService.isUser();
      }

  ngOnInit(): void {

    this.routeSub = this.route.params.subscribe( params => {
      this.offerDetails$ = 
        this.offersService.GetOneOfferById( params['offerId'] )
        .pipe(
          tap( offer => {
            this.isInWatchList = offer.watchedList.some( userId => userId.toString() == this.curentUser?.id );
          }
        ),
        delay(600));
    });
    
    
    if(this.isUser){
      this.curentUser = this.tokenService.currentUser();     
    }  
  }
  
  addToWatchList(offerId: string){

     this.offersService.PutOfferToWatchList( offerId ).pipe(take(1)).subscribe(e =>
      this.toastr.success(e.message));    
  }

  deleteOffer(offerId: string, offerTitle: string){
    if(confirm("Are you sure to delete " + offerTitle)) {
      this.offersService.DeleteOfferById( offerId ).pipe(take(1),
      tap(e => { 
        this.toastr.success(e.message);
        this.router.navigate(['/user/' + this.curentUser?.id + '/profile'])
      }
      )).subscribe();
    }
  }
}
