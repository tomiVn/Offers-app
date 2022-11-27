import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IErrors } from 'src/app/models/formErrorModel';
import { IInputElement } from 'src/app/models/inputElementModel';

@Component({
  selector: 'app-input-element',
  templateUrl: './input-element.component.html',
  styleUrls: ['./input-element.component.less']
})
export class InputElementComponent implements OnInit {

  @Input() contextName!: FormGroup;
  @Input() inputModel!:  IInputElement;
  @Input() inputValue:   string | undefined;
  @Input() inputErrors:  IErrors[] | undefined;

  

  constructor() { }

  ngOnInit(): void {
    if (this.inputValue !== undefined) {
      this.contextName.controls[this.inputModel.elementName].setValue(this.inputValue);
    }

    if(this.inputModel.elementType == undefined){
      this.inputModel.elementType = 'text';
    }
  }
}
