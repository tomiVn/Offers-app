import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { MaterialsModule } from 'src/app/materials/materials.module';
import { LayoutModule } from 'src/app/layout/layout.module';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    MaterialsModule,
    LayoutModule
  ],
  exports:[RegisterComponent, LoginComponent, ProfileComponent],
  providers: []
})
export class AuthModule { }
