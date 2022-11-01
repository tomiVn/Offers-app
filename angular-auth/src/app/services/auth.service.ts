import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/userModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userPathString: string = 'http://localhost:3030/user';

  constructor(private http: HttpClient) { }

  signUpService(formData: any) :Observable<User>{

    return this.http.post<User>(this.userPathString, formData);
  }

  signIn(formData: any) :Observable<any>{

    return this.http.post(this.userPathString + '/login', formData);
  }

  logOut(){
    
    return this.http.get( this.userPathString );
  }

  userProfile() :Observable<any>{

    return this.http.get( this.userPathString );  
  }

  updateUserProfile( formData: any ) :Observable<User>{

    return this.http.put<User>( this.userPathString, formData )
  }

}
