import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../middlewear/auth.guard';
import { CreateOfferComponent } from './create-offer/create-offer.component';


const routes: Routes = [
   
{ path: 'create', component: CreateOfferComponent, canActivate: [AuthGuard], title: 'Create offer' },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class OffersRoutingModule { }