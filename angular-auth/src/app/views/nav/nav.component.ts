import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements DoCheck {

  isUser: boolean = false;

  constructor(private service: TokenService) { }

  ngDoCheck(): void {
    console.log('Hello');
    
    let token = this.service.getToken();

    if (token) {
      let decodeTokent = this.service.decodeToken(token);

      if (decodeTokent.username && decodeTokent.exp * 1000 > new Date().getTime()) {
        this.isUser = true;
        return;
      }
    }

    this.isUser = false;
  }
}
