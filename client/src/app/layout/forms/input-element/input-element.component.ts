import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IErrors } from 'src/app/models/formErrorModel';

@Component({
  selector: 'app-input-element',
  templateUrl: './input-element.component.html',
  styleUrls: ['./input-element.component.less']
})
export class InputElementComponent implements OnInit {

  @Input() contextName!: FormGroup;
  @Input() inputName!:   string;
  @Input() inputLabel!:  string;
  @Input() inputType:    string | undefined;
  @Input() inputValue:   string | undefined;
  @Input() inputErrors:  IErrors[] | undefined;

  constructor() { }

  ngOnInit(): void {
    if (this.inputValue !== undefined) {
      this.contextName.controls[this.inputName].setValue(this.inputValue);
    }

    if(this.inputType == undefined){
       this.inputType = 'text';
    }
  }
}
