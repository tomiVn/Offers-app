import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IFormModel } from 'src/app/models/interfaces/formElementsInterface';
import { IErrors } from 'src/app/models/interfaces/formErrorModel';
import { IInputElement } from 'src/app/models/interfaces/inputElementModel';

@Component({
  selector: 'app-input-element',
  templateUrl: './input-element.component.html',
  styleUrls: ['./input-element.component.less']
})
export class InputElementComponent implements OnInit {

  @Input() context!:  FormGroup;
  @Input() model!:   any;
  @Input() value:   string | undefined;

  constructor() { }

  ngOnInit(): void {
    if (this.value !== undefined) {
      this.context.controls[this.model.elementName].setValue(this.value);
    }

    if(this.model.elementType == undefined){
      this.model.elementType = 'text';
    }
  }
}
