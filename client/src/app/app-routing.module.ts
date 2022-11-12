import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ContactsComponent } from './views/contacts/contacts.component';
import { AboutusComponent } from './views/aboutus/aboutus.component';

const routes: Routes = [
  
{ path: '',         pathMatch: 'full', redirectTo: 'home' },
{ path: 'home',     component: HomeComponent },
{ path: 'contacts', component: ContactsComponent },
{ path: 'about-us', component: AboutusComponent },
{
  path: 'auth',     loadChildren: () => import('./views/auth/auth-routing.module').then(m => m.AuthRoutingModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
