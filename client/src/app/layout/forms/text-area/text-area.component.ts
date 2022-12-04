import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.less']
})
export class TextAreaComponent implements OnInit {

  @Input() context!: FormGroup;
  @Input()    model: any;
  @Input()    value: any;
  symbols: string = '< >';
  
  constructor() { }

  ngOnInit(): void {
  }

}
