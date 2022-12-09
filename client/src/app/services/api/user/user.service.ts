import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/interfaces/userModel';
import { FormDataAppend } from 'src/app/utils/form-data-append';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userPathString: string = environment.path + '/user';
 
  constructor(private http: HttpClient) { }

  getUserDetails(): Observable< User >{
    return this.http.get< User >( this.userPathString ); 
  }

  updateUserDetails( form: NgForm ): Observable< User > {
    return this.http.put< User >( this.userPathString, form );
  }

  updateUserAvatar( form: NgForm ): Observable< User >{
  
    let formData = FormDataAppend( form );

    return this.http.put< User >( this.userPathString + '/avatar', formData );
  }
  
}
