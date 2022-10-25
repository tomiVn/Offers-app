import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatCardModule } from '@angular/material/card'; 

let use = [ReactiveFormsModule, MatInputModule, MatButtonModule, MatCardModule]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    use
  ],
  exports: [use]
})
export class MaterialsModule { }
