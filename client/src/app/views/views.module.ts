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
import { NotFoundComponent } from './not-found/not-found.component';
import { OffersModule } from './offers/offers.module';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';  

@NgModule({
  declarations: [ HomeComponent, ContactsComponent, AboutusComponent, NotFoundComponent ],

  imports: [
    CommonModule,
    AuthModule,
    UserModule,
    OffersModule,

    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    PostsModule,
    NgOptimizedImage, 
    MatIconModule,
    MatDividerModule
  ],
})
export class ViewsModule { }
