import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatCardModule } from '@angular/material/card'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon'; 
import { MatToolbarModule } from '@angular/material/toolbar'; 
import {MatAutocompleteModule} from '@angular/material/autocomplete'; 

let use = [ReactiveFormsModule, MatInputModule, MatButtonModule, MatCardModule, 
           MatFormFieldModule, MatIconModule, MatToolbarModule, MatAutocompleteModule]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    use
  ],
  exports: [use],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ]
})
export class MaterialsModule { }
