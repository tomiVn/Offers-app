import { NgModule } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { MaterialsModule } from 'src/app/materials/materials.module';
import { IputDatePickerComponent } from './iput-date-picker/iput-date-picker.component';
import { MatNativeDateModule } from '@angular/material/core';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { DescriptionComponent } from './description/description.component';
import { SelectDropDownComponent } from './select-drop-down/select-drop-down.component';
import { InputElementComponent } from './input-element/input-element.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { ImgUploadComponent } from './img-upload/img-upload.component';

const formElements = [ 
                       IputDatePickerComponent,
                       ImageUploadComponent,
                       DescriptionComponent,
                       SelectDropDownComponent,
                       InputElementComponent, 
                       AutocompleteComponent,
                       ImgUploadComponent
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