import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOffer } from 'src/app/models/interfaces/offerInterface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  offerPathString: string = environment.path + '/offers';
 
  constructor(private http: HttpClient) { }

  createOffer (form: any): Observable<IOffer>{
    
    let formData = new FormData();
    formData.append('title', form.title); 
    formData.append('file', form.image);
    formData.append('description', form.description);
    formData.append('contactInfo', form.contactInfo)
    formData.append('price', form.price);
    formData.append('fromDate', form.fromDate);
    formData.append('untilDate', form.untilDate);
    
    return this.http.post<IOffer>(this.offerPathString, formData);
  }
  
}
