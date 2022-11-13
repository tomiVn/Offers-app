import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-name',
  template: `
          <ng-container [formGroup]="inputName">
            <mat-form-field  class="example-full-width" appearance="fill">
                <mat-label>Names</mat-label>
                <input matInput placeholder="Names" 
                formControlName="name"/>
            </mat-form-field>
           
            <mat-error class="example-full-width" *ngIf="inputName.get('name')?.errors 
            && inputName.get('name')?.touched">
                <mat-error *ngIf="inputName.get('name')?.errors?.['required']">
                    Name is <strong>required!</strong>
                </mat-error>
            </mat-error>
          </ng-container>
  `, 
  styles: ['.example-full-width{ width: 100%; }']
})
export class InputNameComponent implements OnInit {

  @Input() inputName!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
