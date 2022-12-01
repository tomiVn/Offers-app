import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { ViewsModule } from './views/views.module';
import { ToastrModule } from 'ngx-toastr';
import { LayoutModule } from './layout/layout.module';
import { AuthInterceptor } from './middlewear/authInterceptor';

@NgModule({
  declarations: [
    AppComponent
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
  ],  providers: [
    {
      provide: HTTP_INTERCEPTORS, //important
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }