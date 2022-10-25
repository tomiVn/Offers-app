import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
     name: ['', [Validators.required]],
     username: ['', [Validators.required, Validators.minLength(4)]],
     password: ['', [Validators.required, Validators.minLength(4)]],
     repeatPass: ['', [Validators.required, Validators.minLength(4)]],
    })

  }

  ngOnInit(): void {
  }

}
