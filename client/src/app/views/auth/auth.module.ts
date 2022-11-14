import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { MatCardModule } from '@angular/material/card'; 
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from 'src/app/layout/layout.module';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ReactiveFormsModule,
    LayoutModule,
    MatButtonModule
  ],
  
  providers: []
})
export class AuthModule { }
