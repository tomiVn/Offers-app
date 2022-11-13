import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputRepeatPasswordComponent } from './input-repeat-password.component';

describe('InputRepeatPasswordComponent', () => {
  let component: InputRepeatPasswordComponent;
  let fixture: ComponentFixture<InputRepeatPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputRepeatPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputRepeatPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
