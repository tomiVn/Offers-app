import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../middlewear/auth.guard';
import { EditComponent } from '../user/edit/edit.component';
import { CreateOfferComponent } from './create-offer/create-offer.component';
import { DetailsOfferComponent } from './details-offer/details-offer.component';
import { EditOfferComponent } from './edit-offer/edit-offer.component';
import { LookingOffersComponent } from './looking-offers/looking-offers.component';

const routes: Routes = [
   
    { 
      path: 'create', 
      component: CreateOfferComponent, 
      canActivate: [AuthGuard], 
      title: 'Create offer' 
    },
    { 
      path: '', 
      component: LookingOffersComponent, 
      title: 'Day offers' 
    },
    { 
      path: ':offerId/view', 
      component: DetailsOfferComponent, 
      title: 'Offer details' 
    },
    { 
      path: ':offerId/edit', 
      component: EditOfferComponent, 
      canActivate: [AuthGuard], 
      title: 'Edit offer' 
    },
  ];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class OffersRoutingModule { }