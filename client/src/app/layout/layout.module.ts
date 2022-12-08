import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../middlewear/authInterceptor';
import { AppComponent } from '../app.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MatDividerModule } from '@angular/material/divider'; 
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from './forms/forms.module';
import { FooterComponent } from './footer/footer.component';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';  
import { NgOptimizedImage } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu'; 
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    SideNavComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatButtonModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatInputModule,
    MatGridListModule,
    NgOptimizedImage,
    MatMenuModule,
    //RouterModule.forRoot([], { enableTracing: true })
  ],
  exports: [ HeaderComponent, SideNavComponent, FooterComponent, FormsModule ],
             
  providers: [ CookieService, 
    { provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true }],
    
  bootstrap: [AppComponent]
})
export class LayoutModule { }
