import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ContactsComponent } from './views/contacts/contacts.component';

const routes: Routes = [
  
{ path: '', pathMatch: 'full', redirectTo: 'home' },
{ path: 'home', component: HomeComponent },
{ path: 'contacts', component: ContactsComponent },
{
  path: 'auth',
  loadChildren: () => import('./auth/auth-routing.module').then(m => m.AuthRoutingModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
