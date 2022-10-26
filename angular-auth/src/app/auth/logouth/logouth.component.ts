import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logouth',
  templateUrl: './logouth.component.html',
  styleUrls: ['./logouth.component.less']
})
export class LogouthComponent implements OnInit{

  constructor(private service: AuthService) { }

  ngOnInit(): void {
   
  }

  

}
