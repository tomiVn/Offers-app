import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-iput-date-picker',
  template: `
  <ng-container [formGroup]="inputDate">
    <mat-form-field class="example-full-width" appearance="fill">
      <mat-label>Choose a date</mat-label>
      <input matInput [min]="minDate" [max]="maxDate" [matDatepicker]="picker">
      <mat-hint align="end">MM/DD/YYYY</mat-hint>
      <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-datepicker #picker></mat-datepicker>
    </mat-form-field>
  </ng-container>`,
  styles: ['.example-full-width{display:block; max-width: 200px; background-color: #FFFFFF;}', 'matInput{background-color: #FFFFFF;}']
})
export class IputDatePickerComponent implements OnInit {

  @Input() inputDate!: FormGroup;
  minDate: Date;
  maxDate: Date;

  constructor() {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 22, 11, 1);
    this.maxDate = new Date(currentYear + 1, 4, 11);
   }

  ngOnInit(): void { }

}
