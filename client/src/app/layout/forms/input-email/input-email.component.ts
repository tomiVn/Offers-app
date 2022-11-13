import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-email',
  template: `
  <ng-container [formGroup]="inputEmail">
            <mat-form-field class="example-full-width" appearance="fill">
                <mat-label> @Email </mat-label>
                <input matInput #email placeholder="@Email" formControlName="email">
                <mat-hint align="end">
                    Min length 6 characters {{email.value.length || 0}}
                </mat-hint>
            </mat-form-field>

            <mat-error *ngIf="inputEmail.get('email')?.errors 
                        && inputEmail.get('email')?.touched">

                <mat-error *ngIf="inputEmail.get('email')?.errors?.['required']">
                    @Email is <strong>required!</strong>
                </mat-error>

                <mat-error *ngIf="inputEmail.get('email')?.errors?.['minlength']">
                    @Email min length <strong>6 characters!</strong>
                </mat-error>

                <mat-error *ngIf="inputEmail.get('email')?.errors?.['pattern']">
                    @Email is <strong> not valid!</strong>
                </mat-error>
            </mat-error>
  </ng-container>          
  `,
  styles: ['.example-full-width{ width: 100%;}']
})
export class InputEmailComponent implements OnInit {

  @Input() inputEmail!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
