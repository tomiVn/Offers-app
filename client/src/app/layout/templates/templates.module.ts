import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../../app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'; 
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OfferTemplateComponent } from './offer-template/offer-template.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    OfferTemplateComponent
  ],
  imports: [
    CommonModule, 
    MatButtonModule,
    AppRoutingModule, 
    MatIconModule,
    MatToolbarModule,  
    NgOptimizedImage,
    MatMenuModule,
    RouterModule
  ],
  exports: [  OfferTemplateComponent ],
             
  providers: [ ],
    
  bootstrap: [AppComponent]
})
export class TemplatesModule { }
