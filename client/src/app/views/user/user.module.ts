import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { EditComponent } from './edit/edit.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MaterialsModule } from 'src/app/materials/materials.module';
import { FormsModule } from 'src/app/layout/forms/forms.module';



@NgModule({
  declarations: [
    ProfileComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ReactiveFormsModule,   
    MatButtonModule,
    NgOptimizedImage,
    MatIconModule,
    AppRoutingModule,
    MatGridListModule,
    MaterialsModule,
    FormsModule,
    LayoutModule
  ]
})
export class UserModule { }
