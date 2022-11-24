import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-title',
  template: `
    <ng-container [formGroup]="inputTitle">
            <mat-form-field  class="example-full-width" appearance="fill">
                <mat-label> Title </mat-label>
                <input #title type="text" matInput placeholder="Title" 
                formControlName="title"/>
                <mat-hint align="end">
                    Min length 3 characters {{title.value.length || 0}}
                </mat-hint>
            </mat-form-field>
           
            <mat-error class="example-full-width" *ngIf="inputTitle.get('title')?.errors 
            && inputTitle.get('title')?.touched">
                <mat-error *ngIf="inputTitle.get('title')?.errors?.['required']">
                    Title is <strong>required!</strong>
                </mat-error>

                <mat-error *ngIf="inputTitle.get('title')?.errors?.['minlength']">
                    Title min length <strong>3 characters!</strong>
                </mat-error>

                <mat-error *ngIf="inputTitle.get('title')?.errors?.['pattern']">
                    Special characters <strong>< > are not allowed!</strong>
                </mat-error>
            </mat-error>
          </ng-container>
  `,
  styles: ['.example-full-width{ width: 100%; }']
})
export class InputTitleComponent implements OnInit {

  @Input() inputTitle!: FormGroup;
  @Input() titleValue: string | undefined;

  constructor() { }

  ngOnInit(): void {
    if(this.titleValue !== undefined){
      this.inputTitle.controls['title'].setValue(this.titleValue);
    }
  }

}
