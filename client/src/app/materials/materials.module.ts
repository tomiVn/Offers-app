import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon'; 
import { MatAutocompleteModule } from '@angular/material/autocomplete'; 
import { MatDividerModule } from '@angular/material/divider'; 

let use = [ ReactiveFormsModule, 
            MatInputModule, 
            MatButtonModule,  
            MatFormFieldModule, 
            MatIconModule, 
            MatAutocompleteModule, 
            MatDividerModule ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    use
  ],
  exports: [use],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
  ]
})
export class MaterialsModule { }
