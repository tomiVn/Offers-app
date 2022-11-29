import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../middlewear/auth.guard';
import { EditComponent } from '../user/edit/edit.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from '../user/profile/profile.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
{ path: 'register', component: RegisterComponent, title: 'Register' },
{ path: 'login', component: LoginComponent, title: 'Log in'},
{ path: 'logout', component: LogoutComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AuthRoutingModule { }