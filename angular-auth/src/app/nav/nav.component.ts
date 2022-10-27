import { Component, DoCheck } from '@angular/core';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements DoCheck{

  isUser!: boolean;

  constructor(private service: TokenService) { }
  
  ngDoCheck(): void {
    
    this.isUser = this.service.getToken() ? true : false;

  }

 

}
