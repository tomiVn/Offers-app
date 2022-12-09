import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateOfferComponent } from './create-offer/create-offer.component';
import { MaterialsModule } from 'src/app/materials/materials.module';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from 'src/app/layout/forms/forms.module';
import { LookingOffersComponent } from './looking-offers/looking-offers.component';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { DetailsOfferComponent } from './details-offer/details-offer.component';
import { EditOfferComponent } from './edit-offer/edit-offer.component';

@NgModule({
  declarations: [
    CreateOfferComponent,
    LookingOffersComponent,
    DetailsOfferComponent,
    EditOfferComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule,
    MatCardModule,
    FormsModule,
    MatButtonModule,
    AppRoutingModule
  ]
})
export class OffersModule { }
