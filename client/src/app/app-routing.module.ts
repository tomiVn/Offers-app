import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ContactsComponent } from './views/contacts/contacts.component';
import { AboutusComponent } from './views/aboutus/aboutus.component';
import { PostsModule } from './views/posts/posts.module';
import { CreatePostComponent } from './views/posts/create-post/create-post.component';

const routes: Routes = [
  
{ path: '',         pathMatch: 'full', redirectTo: 'home' },
{ path: 'home',     component: HomeComponent, title: 'Home' },
{ path: 'contacts', component: ContactsComponent, title: 'Contact us' },
{ path: 'about-us', component: AboutusComponent, title: 'About us' },
{
  path: 'auth',     loadChildren: () => import('./views/auth/auth-routing.module').then(m => m.AuthRoutingModule)
},
{
  path: 'user',     loadChildren: () => import('./views/user/user-routing.module').then(u => u.UserRoutingModule )
},
{ path: 'posts', component: CreatePostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
