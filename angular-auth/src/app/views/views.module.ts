import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MaterialsModule } from '../materials/materials.module';
import { NavComponent } from './nav/nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [ HomeComponent, NavComponent],

  imports: [
    CommonModule,
    MaterialsModule,
    BrowserModule,
    AppRoutingModule
  ],
  exports: [ NavComponent ]
})
export class ViewsModule { }
