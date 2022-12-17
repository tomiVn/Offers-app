import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { catchError, Observable, tap, throwError } from "rxjs";
import { AuthService } from "../services/api/auth/auth.service";
import { TokenService } from "../services/token/token.service";

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
  
  constructor(
    private tokenService: TokenService,
    private router: Router,
    private toastr: ToastrService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = this.tokenService.getToken();

    if (token) {
      // If we have a token, we set it to the header
      request = request.clone({
        setHeaders: { 'x-authorization': token }
      });
    }
    return next.handle(request)
  }
}