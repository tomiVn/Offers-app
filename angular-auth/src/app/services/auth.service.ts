import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../auth/userModel';
import { CookieService } from 'ngx-cookie-service';
import { COOKIE_NAME } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userPathString: string = 'http://localhost:3030/user';

  constructor(private http: HttpClient, private cookie: CookieService) { }

  signUpService(formData: any): Observable<User> {

    return this.http.post<User>(this.userPathString, formData);

  }

  signIn(formData: any) {

    return this.http.post(this.userPathString + '/login', formData);
  }

  logOut(){
    return this.http.get(this.userPathString);
  }

  isUser(){
    
    return this.cookie.get(COOKIE_NAME) ? true : false; 
  }

}
