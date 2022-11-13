import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-phone',
  template: `
    <ng-container [formGroup]="inputPhone">
    <mat-form-field class="example-full-width" appearance="fill">
                <mat-label>Mobile Phone</mat-label>
                <input matInput #phone placeholder="Mobile Phone" formControlName="phone">
                <mat-hint align="end">
                    Min length 6 digits {{phone.value.length || 0}}
                </mat-hint>
            </mat-form-field>

            <mat-error *ngIf="inputPhone.get('phone')?.errors 
                            && inputPhone.get('phone')?.touched">

                <mat-error *ngIf="inputPhone.get('phone')?.errors?.['required']">
                    Phone is <strong>required!</strong>
                </mat-error>
                <mat-error *ngIf="inputPhone.get('phone')?.errors?.['pattern']">
                    Phone error - <strong>numbers only!</strong>
                </mat-error>
                <mat-error *ngIf="inputPhone.get('phone')?.errors?.['minlength']">
                    Phone must be at least<strong> 6 digits!</strong>
                </mat-error>
                <mat-error *ngIf="inputPhone.get('phone')?.errors?.['maxlength']">
                    Phone max<strong> 12 digits!</strong>
                </mat-error>
            </mat-error>
    </ng-container>
  `,
  styles: ['.example-full-width{ width: 100%; }']
})
export class InputPhoneComponent implements OnInit {

  @Input() inputPhone!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
