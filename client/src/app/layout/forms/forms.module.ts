import { NgModule } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { MaterialsModule } from 'src/app/materials/materials.module';
import { IputDatePickerComponent } from './iput-date-picker/iput-date-picker.component';
import { MatNativeDateModule } from '@angular/material/core';
import { DescriptionComponent } from './description/description.component';
import { SelectDropDownComponent } from './select-drop-down/select-drop-down.component';
import { InputElementComponent } from './input-element/input-element.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { ImgUploadComponent } from './img-upload/img-upload.component';
import { TextAreaComponent } from './text-area/text-area.component';

const formElements = [ 
                       IputDatePickerComponent,
                       DescriptionComponent,
                       SelectDropDownComponent,
                       InputElementComponent, 
                       AutocompleteComponent,
                       ImgUploadComponent,
                       TextAreaComponent
                      ]

@NgModule({
  declarations: [ formElements ],

    imports: [ CommonModule,
               AppRoutingModule,
               MaterialsModule,
               MatNativeDateModule  
              ],

  //Export Fields is important!!!
    exports: [ formElements ],
             
  providers: [ ],

  bootstrap: [ AppComponent ]
})
export class FormsModule { }