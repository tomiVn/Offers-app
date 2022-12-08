import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ContactsComponent } from './views/contacts/contacts.component';
import { AboutusComponent } from './views/aboutus/aboutus.component';
import { CreatePostComponent } from './views/posts/create-post/create-post.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

const routes: Routes = [
  
{ path: '',         pathMatch: 'full', redirectTo: 'home' },
{ path: 'index',    pathMatch: 'full', redirectTo: 'home' },
{ path: 'home',     component: HomeComponent, title: 'Home' },
{ path: 'contacts', component: ContactsComponent, title: 'Contact us' },
{ path: 'about-us', component: AboutusComponent, title: 'About us' },
{ path: 'notfound', component: NotFoundComponent},
{
  path: 'auth',     loadChildren: () => import('./views/auth/auth-routing.module').then(m => m.AuthRoutingModule)
},
{
  path: 'user',     loadChildren: () => import('./views/user/user-routing.module').then(u => u.UserRoutingModule )
},
{ path: 'posts', component: CreatePostComponent},
{
  path: 'offers',   loadChildren: () => import('./views/offers/offers-routing.module').then(o => o.OffersRoutingModule )
},

{ path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule],
})
export class AppRoutingModule { }

