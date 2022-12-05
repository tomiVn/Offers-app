import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateOfferComponent } from './create-offer/create-offer.component';
import { MaterialsModule } from 'src/app/materials/materials.module';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from 'src/app/layout/forms/forms.module';
import { GetOffersComponent } from './get-offers/get-offers.component';



@NgModule({
  declarations: [
    CreateOfferComponent,
    GetOffersComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule,
    MatCardModule,
    FormsModule
  ]
})
export class OffersModule { }
