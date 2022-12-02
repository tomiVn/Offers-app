import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, DoCheck, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit, DoCheck {

  @Input() sideNav!: MatSidenav;
  userId: string | undefined;
  isUser: boolean | undefined;

  constructor( 
    private service: TokenService,                
    private observer: BreakpointObserver, 
    private cdr: ChangeDetectorRef, 
    private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.sideNavInit();  
    });
  }

  ngAfterViewInit(): void {
    this.sideNav.opened = true;
    this.sideNavInit();
  }

  ngDoCheck(): void {
    
    let payload = this.service.currentUser();

    if ( payload ) {
        this.userId = payload.id;
        this.isUser = true;       
        return;     
    }else{
      this.isUser = false;
      return;
    }
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
