import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-file-upload',
  template: `
            <ng-container [formGroup]="uploadImage">
              <mat-form-field class="example-full-width" appearance="fill" enctype="multipart/form-data">
                <!-- <mat-label><mat-icon>file_upload</mat-icon></mat-label> -->
                <input hidden matInput id="file-input"  formControlName="file">           
                <input 
                  type="file" 
                  id="file"                
                  (change)="upload($event)"
                  accept=".jpeg,.jpg,.png" 
                  value="select"
                  #selectFile
                  multiple/>
                <mat-hint class="mat-form-field-hint-end">JPEG / JPG / PNG</mat-hint>
              </mat-form-field>
              
              <!-- <img [src]="image" /> -->
            </ng-container>`,

  styles: [ '#file::file-selector-button{}', 
            '#file::file-selector-button:hover{cursor: pointer;}',
            '#file{color: grey;}',
            '.example-full-width{width: 100%;}'
          ]
})
export class FileUploadComponent implements OnInit {

  @Input() uploadImage!: FormGroup;
  image = '';
  constructor() { }

  ngOnInit(): void {
  }

  upload($event: any) {

    const reader = new FileReader();

    const file:File = $event.target.files[0];
    reader.readAsDataURL(file);
    
    reader.onload = () => {
      this.image = reader.result as string;    
    }
    return this.uploadImage.controls['file'].setValue(file);
  }

}
