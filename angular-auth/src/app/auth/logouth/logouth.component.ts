import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-logouth',
  templateUrl: './logouth.component.html',
  styleUrls: ['./logouth.component.less']
})
export class LogouthComponent implements OnInit{
   
  constructor(private service: AuthService, private tokenService: TokenService, private router: Router) { }

  ngOnInit(){
   this.service.logOut();
   this.tokenService.deleteToken();
   this.router.navigate(['login']);
  }
}
