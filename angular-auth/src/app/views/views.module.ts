import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MaterialsModule } from '../materials/materials.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutusComponent } from './aboutus/aboutus.component';



@NgModule({
  declarations: [ HomeComponent, ContactsComponent, AboutusComponent],

  imports: [
    CommonModule,
    MaterialsModule,
    BrowserModule,
    AppRoutingModule
  ],
})
export class ViewsModule { }
