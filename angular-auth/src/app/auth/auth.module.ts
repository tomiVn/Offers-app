import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MaterialsModule } from '../materials/materials.module';
import { LogouthComponent } from './logouth/logouth.component';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    LogouthComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule,
  ],
  providers: []
})
export class AuthModule { }
