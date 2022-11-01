import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LogouthComponent } from './auth/logouth/logouth.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './views/home/home.component';
import { AuthGuard } from './middlewear/auth.guard';
import { ContactsComponent } from './views/contacts/contacts.component';
import { ProfileComponent } from './auth/profile/profile.component';

const routes: Routes = [
  
{ path: '', pathMatch: 'full', redirectTo: 'home' },
{ path: 'home', component: HomeComponent },
{ path: 'contacts', component: ContactsComponent },
{ path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
{ path: 'register', component: RegisterComponent },
{ path: 'login', component: LoginComponent },
{ path: 'logout', component: LogouthComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
