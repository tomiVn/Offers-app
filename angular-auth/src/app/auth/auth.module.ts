import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MaterialsModule } from '../materials/materials.module';
import { LogouthComponent } from './logouth/logouth.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    LogouthComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    MaterialsModule,
  ],
  providers: []
})
export class AuthModule { }
