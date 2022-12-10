import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.less']
})
export class DescriptionComponent implements OnInit {

  @Input() context!: FormGroup;
  @Input()    model: any;
  @Input()    value: any;
  symbols: string = '< >';
  constructor() { }
  
  ngOnInit(): void {
    this.context.controls[this.model.elementName].setValue(this.value);
  }

}
