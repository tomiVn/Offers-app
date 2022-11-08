
import { AfterViewInit, ChangeDetectorRef, Component, DoCheck, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { TokenService } from './services/token.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, DoCheck, AfterViewInit{

  title = 'angular-auth';

  @ViewChild(MatSidenav) sideNav!: MatSidenav;

  isUser: boolean = false;

  userName!: string;

  constructor( private service: TokenService, 
               private observer: BreakpointObserver, 
               private cdr: ChangeDetectorRef, 
               private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.sideNavInit();     
    })
  }

  ngAfterViewInit(): void {
    this.sideNav.opened = true;
    this.sideNavInit();
  }

  ngDoCheck(): void {
    
    let token = this.service.getToken();

    if (token) {
      let decodeTokent = this.service.decodeToken(token);

      if (decodeTokent.name && decodeTokent.exp * 1000 > new Date().getTime()) {
        this.isUser = true;
        this.userName = decodeTokent.name;
        return;
      }
    }

    this.isUser = false;
  }

  sideNavInit(){
    this.observer
        .observe(['(max-width:787px)'])
          .subscribe((res) => {
            if(res?.matches){
              this.sideNav.mode = 'over';
              this.sideNav.close();
            }else{
                this.sideNav.mode = 'side';
                this.sideNav.open();
              }
          });
      this.cdr.detectChanges();
  }
}
