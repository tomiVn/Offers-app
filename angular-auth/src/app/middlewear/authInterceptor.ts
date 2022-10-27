import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, throwError } from "rxjs";
import { TokenService } from "../services/token.service";

@Injectable({
    providedIn: 'root'
  })
export class AuthInterceptor implements HttpInterceptor {

    constructor(private tokenService: TokenService, private router: Router) {} 

   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {  

      const token = this.tokenService.getToken();
  
     if (token) {
       // If we have a token, we set it to the header
       request = request.clone({
          setHeaders: {'x-authorization': token } 
       });
    }
  
    return next.handle(request).pipe(
        catchError((err) => {
          if (err instanceof HttpErrorResponse) {
              if (err.status === 401) {
              // redirect user to the logout page
              this.router.navigate(['login'])
           }
        }
        return throwError(err);
      })
     )
    }
  }