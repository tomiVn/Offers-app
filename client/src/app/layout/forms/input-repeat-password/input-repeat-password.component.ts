import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-repeat-password',
  template: `
    <ng-container [formGroup]="inputReapeatPassword">
    <mat-form-field class="example-full-width" appearance="fill">
                <mat-label>Repeat Password</mat-label>
                <input matInput type="password" placeholder="Repeat Password" formControlName="repeatPass">
            </mat-form-field>

            <mat-error *ngIf="inputReapeatPassword.get('repeatPass')?.errors 
                            && inputReapeatPassword.get('repeatPass')?.touched">

                <mat-error *ngIf="inputReapeatPassword.get('repeatPass')?.errors?.['required']">
                    Password is <strong>required!</strong>
                </mat-error>

                <mat-error *ngIf="!inputReapeatPassword.get('repeatPass')?.errors?.['isPasswordsMatch']">
                    Passwords <strong>not match!</strong>
                </mat-error>
            </mat-error>
    </ng-container>
  `,
  styles: ['.example-full-width{ width: 100%; }']
})
export class InputRepeatPasswordComponent implements OnInit {

  @Input() inputReapeatPassword!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
