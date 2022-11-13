import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { ICountry } from 'src/app/models/countryModel';
import { _filter } from 'src/app/utils/countryFilter';

@Component({
  selector: 'app-input-country-code',
  templateUrl: './input-country-code.component.html',
  styles: ['.example-full-width{ width: 100%; }']
})
export class InputCountryCodeComponent implements OnInit {
  

  @Input() inputCountryCode!: FormGroup;
  filteredOptions: Observable<ICountry[]> | undefined;
  
  constructor() { }

  ngOnInit(): void {
    this.filteredOptions = this.inputCountryCode.get('dialCode')?.valueChanges
      .pipe(startWith(''),
        map(value => _filter(value || '')));
  }

}
