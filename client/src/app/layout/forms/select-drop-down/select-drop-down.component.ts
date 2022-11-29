import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

interface IElents{
  value: string, 
  viewValue: string
}

@Component({
  selector: 'app-select-drop-down',
  templateUrl: './select-drop-down.component.html',
  styleUrls: ['./select-drop-down.component.less']
})
export class SelectDropDownComponent implements OnInit {

  constructor() { }

  @Input() context!: FormGroup;
  @Input() model: any;
  @Input() value: string | undefined;

  ngOnInit(): void {
    if (this.value !== undefined) {
      this.context.controls[this.model.elementName].setValue(this.value);
    }
  }

}
