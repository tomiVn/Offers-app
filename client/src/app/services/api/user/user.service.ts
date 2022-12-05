import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/interfaces/userModel';
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

    let formData = new FormData();

    Object.entries( form ).forEach(([ key, value ]) => { 
      formData.append( key, value ) } );

    return this.http.put< User >( this.userPathString + '/avatar', formData );
  }
  
}
