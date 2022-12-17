import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BehaviorSubject, Observable, take, tap } from 'rxjs';
import { IToken } from 'src/app/models/interfaces/tokenModel';
import { IUserLogIn } from 'src/app/models/interfaces/userLogin';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  userPathString: string = environment.path + '/api/user';

  isLogIn = new BehaviorSubject<boolean>( false );
  //isUser = this.isLogIn.asObservable();
  constructor( private http: HttpClient ) { }

   signUp( formData: NgForm ): Observable< IToken > {
    this.isLogIn.next( true );
    return this.http.post< IToken >( this.userPathString, formData );
  }

  signIn( formData: IUserLogIn ): Observable< IToken > {
    this.isLogIn.next( true );
    return this.http.post< IToken >( this.userPathString + '/login', formData );
  }

  signOut(): Observable< { name: string } > {
    this.isLogIn.next( false );
    
    return this.http.get< { name: string } >( this.userPathString + '/logout' );
  }

  checkForUser(): Observable< { name: string } > {
    return this.http.get< { name: string } > (this.userPathString + '/test')
      .pipe(take(1), tap(res => {
        return this.isLogIn.next(res.name ? true : false);        
        })
      )  
    }
    
}
