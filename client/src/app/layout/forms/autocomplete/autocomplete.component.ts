import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { IAutoComplete } from 'src/app/models/interfaces/autocompleteModel';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.less']
})

export class AutocompleteComponent implements OnInit {

  @Input() context!: FormGroup;
  @Input() model: any;
  @Input() value: string | undefined;
  filteredOptions: Observable<IAutoComplete[]> | undefined;

  constructor() { }

  ngOnInit(): void {
    if (this.value !== undefined) {
      this.context.controls[this.model.elementName].setValue(this.value);
    }

    this.filteredOptions = this.context.get(this.model.elementName)?.valueChanges
      .pipe(startWith(''),
        map(value => this._filter(value || '')));
  }

  _filter(value: string): IAutoComplete[] {

    const filterValue = value.toLowerCase();

    return this.model.values.filter((c: IAutoComplete) => c.name.toLowerCase().includes(filterValue));
  }
}



