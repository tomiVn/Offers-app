import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { IOffer } from 'src/app/models/interfaces/offerInterface';
import { FormDataAppend } from 'src/app/utils/form-data-append';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  offerPathString: string = environment.path + '/offers';
  
  constructor( private http: HttpClient ) { }

  CreateOffer ( form: NgForm ): Observable< IOffer > {
      
    let formData = FormDataAppend( form );
   
    return this.http.post< IOffer >( this.offerPathString, formData );
  }

  GetOffers( queryString: string ): Observable< IOffer[] >{
    return this.http.get< IOffer[] >( this.offerPathString + '?date=' + queryString );
  }

  GetOneOfferById( id: string): Observable< IOffer >{
    return this.http.get< IOffer >( this.offerPathString + '?offerId=' + id );
  }

  PutOfferToWatchList( offerId: string ): Observable< {message: string} >{
    
    return this.http.put< {message: string} >( this.offerPathString + '/watch-list', { offerId } );
  }

  DeleteOfferById(offerId: string): Observable< {message: string} >{
      return this.http.delete< {message: string} >( this.offerPathString + '?offerId=' + offerId );
  }

  UpdateOffer(form: NgForm, offerId: string): Observable< {message: string} >{

    let formData = FormDataAppend( form );

    formData.append('_id', offerId);

      return this.http.put< {message: string} >( this.offerPathString, formData );
  }

}
