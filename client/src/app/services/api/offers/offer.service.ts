import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { IOffer } from 'src/app/models/interfaces/offerInterface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  offerPathString: string = environment.path + '/offers';
 
  constructor( private http: HttpClient ) { }

  createOffer ( form: NgForm ): Observable< IOffer > {
      
    let formData = new FormData();

    Object.entries( form ).forEach(([ key, value ]) => { 
        formData.append( key, value ) } );
   
    return this.http.post< IOffer >( this.offerPathString, formData );
  }
  
}
