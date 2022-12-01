import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IToken } from '../models/interfaces/tokenModel';
import { IUserLogIn } from '../models/interfaces/userLogin';
import { User } from '../models/interfaces/userModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userPathString: string = environment.path + '/user';
 
  constructor(private http: HttpClient) { }

  signUpService(formData: NgForm): Observable<IToken> {
    return this.http.post<IToken>(this.userPathString, formData);
  }

  signInService(formData: IUserLogIn): Observable<IToken> {
    return this.http.post<IToken>(this.userPathString + '/login', formData);
  }

  signOutService(): Observable<{name: string}>{
    return this.http.get<{name: string}>(this.userPathString + '/logout');
  }

  getUserService(): Observable<User>{
    return this.http.get<User>(this.userPathString); 
  }

  updateUserService(form: NgForm): Observable<User> {
    return this.http.put<User>(this.userPathString, form);
  }

  updateUserAvatar(form: any): Observable<User>{
    let formData = new FormData();
    console.log(form.image.name);
    
    formData.append('file', form.image, form.image.name);
    return this.http.put<User>(this.userPathString + '/avatar', formData);
  }
  
}
