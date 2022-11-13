import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../middlewear/auth.guard';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
   
{ path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
{ path: 'register', component: RegisterComponent },
{ path: 'login', component: LoginComponent },
{ path: 'logout', component: LogoutComponent },

];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AuthRoutingModule { }