import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../middlewear/authInterceptor';
import { AppComponent } from '../app.component';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MatDividerModule } from '@angular/material/divider'; 
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialsModule } from '../materials/materials.module';
import { InputNameComponent } from './forms/input-name/input-name.component';
import { InputEmailComponent } from './forms/input-email/input-email.component';
import { InputPasswordComponent } from './forms/input-password/input-password.component';
import { InputRepeatPasswordComponent } from './forms/input-repeat-password/input-repeat-password.component';
import { InputPhoneComponent } from './forms/input-phone/input-phone.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SideNavComponent,
    InputNameComponent,
    InputEmailComponent,
    InputPasswordComponent,
    InputRepeatPasswordComponent,
    InputPhoneComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    AppRoutingModule,
    MaterialsModule
  ],
  exports: [ HeaderComponent, SideNavComponent, InputNameComponent, InputEmailComponent,
            InputPasswordComponent, InputRepeatPasswordComponent, InputPhoneComponent ],
  providers: [CookieService, 
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class LayoutModule { }
