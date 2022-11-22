import { NgModule } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { CommonModule } from '@angular/common';
import { InputNameComponent } from './input-name/input-name.component';
import { InputEmailComponent } from './input-email/input-email.component';
import { InputPasswordComponent } from './input-password/input-password.component';
import { InputRepeatPasswordComponent } from './input-repeat-password/input-repeat-password.component';
import { InputPhoneComponent } from './input-phone/input-phone.component';
import { InputCountryCodeComponent } from './input-country-code/input-country-code.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { MaterialsModule } from 'src/app/materials/materials.module';
import { IputDatePickerComponent } from './iput-date-picker/iput-date-picker.component';
import { MatNativeDateModule } from '@angular/material/core';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { InputTitleComponent } from './input-title/input-title.component';

const formElements = [ InputNameComponent,
                       InputEmailComponent,
                       InputPasswordComponent,
                       InputRepeatPasswordComponent,
                       InputPhoneComponent,
                       InputCountryCodeComponent,
                       IputDatePickerComponent,
                       FileUploadComponent,
                       InputTitleComponent
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