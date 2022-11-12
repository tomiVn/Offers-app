import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IToken } from '../models/tokenModel';
import { IUserLogIn } from '../models/userLogin';
import { User } from '../models/userModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userPathString: string = environment.path + '/user';
 
  constructor(private http: HttpClient) { }

  signUpService(formData: NgForm): Observable<User> {
    return this.http.post<User>(this.userPathString, formData);
  }

  signIn(formData: IUserLogIn): Observable<IToken> {
    return this.http.post<IToken>(this.userPathString + '/login', formData);
  }

  logOut() {
    return this.http.get(this.userPathString);
  }

  userProfile(): Observable<User>{
    return this.http.get<User>(this.userPathString);
  }

  updateUserProfile(formData:NgForm): Observable<User> {
    return this.http.put<User>(this.userPathString, formData)
  }
}
