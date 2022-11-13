import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCountryCodeComponent } from './input-country-code.component';

describe('InputCountryCodeComponent', () => {
  let component: InputCountryCodeComponent;
  let fixture: ComponentFixture<InputCountryCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputCountryCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputCountryCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
