import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-password',
  template: `
   <ng-container [formGroup]="inputPassword">
    <mat-form-field class="example-full-width" appearance="fill">
                <mat-label>Password</mat-label>
                <input matInput #password type="password" placeholder="Password" formControlName="password">
                <mat-hint align="end">
                    Min length 4 characters {{password.value.length || 0}}
                </mat-hint>
            </mat-form-field>

            <mat-error *ngIf="inputPassword.get('password')?.errors 
                            && inputPassword.get('password')?.touched">

                <mat-error *ngIf="inputPassword.get('password')?.errors?.['required']">
                    Password is <strong>required!</strong>
                </mat-error>

                <mat-error *ngIf="inputPassword.get('password')?.errors?.['minlength']">
                    Password min length <strong>4 characters!</strong>
                </mat-error>
            </mat-error>
   </ng-container>
  `,
  styles: ['.example-full-width{ width: 100%; }']
})
export class InputPasswordComponent implements OnInit {

  @Input() inputPassword!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
