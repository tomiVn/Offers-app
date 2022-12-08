import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { delay, filter, map, Observable, Subscription, toArray } from 'rxjs';
import { IOffer } from 'src/app/models/interfaces/offerInterface';
import { ITokenPayload } from 'src/app/models/interfaces/tokenPayloadInterface';
import { OfferService } from 'src/app/services/api/offers/offer.service';
import { UserService } from 'src/app/services/api/user/user.service';
import { TokenService } from 'src/app/services/token/token.service';

@Component({
  selector: 'app-details-offer',
  templateUrl: './details-offer.component.html',
  styleUrls: ['./details-offer.component.less']
})
export class DetailsOfferComponent implements OnInit {

  offerDetails$: Observable<IOffer> | undefined;
  routeSub: Subscription | undefined;
  isUser: boolean;
  curentUser: ITokenPayload | undefined;

  constructor(
    private offersService: OfferService,
    private route: ActivatedRoute,
    private tokenService: TokenService,
    private userService: UserService) 
      {
        this.isUser = tokenService.isUser();
      }

  ngOnInit(): void {

    this.routeSub = this.route.params.subscribe( params => {
      this.offerDetails$ = 
        this.offersService.GetOneOfferById(params['offerId'])
        .pipe(delay(600));
    });

    if(this.isUser){
      this.curentUser = this.tokenService.currentUser();
    }  
  }
  
  addToWatchList(offerId: string){

     this.userService.PutOfferToWatchList( offerId ).subscribe();
     
  }
}
