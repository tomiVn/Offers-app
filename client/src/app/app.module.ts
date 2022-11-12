import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { ViewsModule } from './views/views.module';
import { ToastrModule } from 'ngx-toastr';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule, //important
    MatSidenavModule,
    ViewsModule,
    ToastrModule.forRoot({
      positionClass: "toast-bottom-center",
      preventDuplicates: true  
    }),
    LayoutModule   
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }