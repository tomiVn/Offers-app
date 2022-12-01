
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IFormModel } from 'src/app/models/interfaces/formElementsInterface';

@Component({
  selector: 'app-img-upload',
  templateUrl: './img-upload.component.html',
  styleUrls: ['./img-upload.component.less']
})
export class ImgUploadComponent implements OnInit {

  @Input() context!: FormGroup;
  @Input() model!: IFormModel;
  @Input() value: string | undefined;
  @Output() image = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {}

  upload($event: any) {

    const file: File = $event.target.files[0];
    this.context.controls[this.model.elementName].setValue(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    
    reader.onload = () => {
      
      let result = reader.result as string;
      this.image.emit(result as string);
    }
  }
}


