import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { IToken } from 'src/app/models/interfaces/tokenModel';
import { IUserLogIn } from 'src/app/models/interfaces/userLogin';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userPathString: string = environment.path + '/api/user';
 
  constructor( private http: HttpClient ) { }

  signUp( formData: NgForm ): Observable< IToken > {
    return this.http.post< IToken >( this.userPathString, formData );
  }

  signIn( formData: IUserLogIn ): Observable< IToken > {
    return this.http.post< IToken >( this.userPathString + '/login', formData );
  }

  signOut(): Observable< { name: string } > {
    return this.http.get< { name: string } >( this.userPathString + '/logout' );
  }
}
