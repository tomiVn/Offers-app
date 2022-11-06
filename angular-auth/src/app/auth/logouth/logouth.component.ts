import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-logouth',
  templateUrl: './logouth.component.html',
  styleUrls: ['./logouth.component.less']
})
export class LogouthComponent implements OnInit{
   
  constructor(private service: AuthService, 
    private tokenService: TokenService, 
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(){

   this.service.logOut();

   this.tokenService.deleteToken();

   this.router.navigate(['/auth/login']);
   
   this.toastr.success('Successfully logged out', 'Thank you!');
  }
}
