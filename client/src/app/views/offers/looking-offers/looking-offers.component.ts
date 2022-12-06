import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IOffer } from 'src/app/models/interfaces/offerInterface';
import { OfferService } from 'src/app/services/api/offers/offer.service';

@Component({
  selector: 'app-looking-offers',
  templateUrl: './looking-offers.component.html',
  styleUrls: ['./looking-offers.component.less']
})
export class LookingOffersComponent implements OnInit {
  
  offersData$!: Observable< IOffer[] >;

  constructor(
    private offerService: OfferService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.queryParams
      .subscribe(params => {
        this.offersData$ = this.offerService.GetOffers( params['date'] )
      });
  }
}
