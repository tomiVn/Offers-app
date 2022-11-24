import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.less']
})
export class DescriptionComponent implements OnInit {

  @Input() txtArea!: FormGroup;
  symbols: string = '< >';
  constructor() { }
  
  ngOnInit(): void {
  }

}
