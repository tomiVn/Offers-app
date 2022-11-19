import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IputDatePickerComponent } from './iput-date-picker.component';

describe('IputDatePickerComponent', () => {
  let component: IputDatePickerComponent;
  let fixture: ComponentFixture<IputDatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IputDatePickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IputDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
