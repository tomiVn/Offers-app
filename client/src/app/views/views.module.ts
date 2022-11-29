import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card'; 
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import { NgOptimizedImage } from '@angular/common';
import { UserModule } from './user/user.module';



@NgModule({
  declarations: [ HomeComponent, ContactsComponent, AboutusComponent ],

  imports: [
    CommonModule,
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    PostsModule,
    NgOptimizedImage,
    UserModule
  ],
})
export class ViewsModule { }
