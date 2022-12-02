
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnlyGuestsGuard } from 'src/app/middlewear/only-guests.guard';
import { AuthGuard } from '../../middlewear/auth.guard';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
{ path: 'register', component: RegisterComponent, canActivate: [OnlyGuestsGuard], title: 'Register' },
{ path: 'login', component: LoginComponent, canActivate: [OnlyGuestsGuard], title: 'Log in'},
{ path: 'logout', component: LogoutComponent, canActivate:[AuthGuard] },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AuthRoutingModule { }