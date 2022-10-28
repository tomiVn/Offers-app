import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MaterialsModule } from '../materials/materials.module';
import { NavComponent } from './nav/nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { ContactsComponent } from './contacts/contacts.component';



@NgModule({
  declarations: [ HomeComponent, NavComponent, ContactsComponent],

  imports: [
    CommonModule,
    MaterialsModule,
    BrowserModule,
    AppRoutingModule
  ],
  exports: [ NavComponent ]
})
export class ViewsModule { }
