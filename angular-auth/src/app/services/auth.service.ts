import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../auth/userModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userPathString: string = 'http://localhost:3030/user';

  constructor(private http: HttpClient) { }

  signUpService(formData: any): Observable<User>{

  return  this.http.post<User>(this.userPathString, formData);

  }
}
