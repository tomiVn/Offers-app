import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-iput-date-picker',
  template: `
  <ng-container [formGroup]="context">
    <mat-form-field class="example-full-width" appearance="fill">
      <mat-label>{{model.label}}</mat-label>
      <input matInput [matDatepicker]="picker" formControlName="{{model.elementName}}">
      <mat-hint align="end">MM/DD/YYYY</mat-hint>
      <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-datepicker #picker></mat-datepicker>
    </mat-form-field>
    <mat-error 
      class="example-full-width" 
      *ngIf="context.get(model.elementName)?.errors 
      && context.get(model.elementName)?.touched">

        <ng-container *ngFor="let error of model.errors">
          <mat-error *ngIf="context.get(model.elementName)?.errors?.[error.name]">
            <strong>{{error.message}}</strong>
          </mat-error>
        </ng-container>

    </mat-error>
  </ng-container>`,
  styles: ['.example-full-width{ width: 100%; background-color: #FFFFFF;}', 'matInput{background-color: #FFFFFF;}']
})
export class IputDatePickerComponent implements OnInit {

  @Input() context!: FormGroup;
  @Input() model: any;
  @Input() value: any;

  constructor() {}

  ngOnInit(): void {
    if (this.value !== undefined) {
      this.context.controls[this.model.elementName].setValue(this.value);
    }
   }

}
