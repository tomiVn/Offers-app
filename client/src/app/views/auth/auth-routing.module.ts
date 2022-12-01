import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestOnlyGuard } from 'src/app/middlewear/guest-only.guard';
import { AuthGuard } from '../../middlewear/auth.guard';
import { EditComponent } from '../user/edit/edit.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
{ path: 'register', component: RegisterComponent, canActivate: [GuestOnlyGuard], title: 'Register' },
{ path: 'login', component: LoginComponent, canActivate: [GuestOnlyGuard], title: 'Log in'},
{ path: 'logout', component: LogoutComponent,  canActivate: [AuthGuard] },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AuthRoutingModule { }