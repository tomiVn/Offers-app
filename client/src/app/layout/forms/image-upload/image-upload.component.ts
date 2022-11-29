import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.less']
})
export class ImageUploadComponent {

  @Input() context!: FormGroup;
  image = '';

  constructor() { }

  upload($event: any) {

    const reader = new FileReader();

    const file: File = $event.target.files[0];

    reader.readAsDataURL(file);

    reader.onload = () => {
      this.image = reader.result as string;
    }

    return this.context.controls['file'].setValue(file);
  }

}
