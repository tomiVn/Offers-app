import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogouthComponent } from './logouth.component';

describe('LogouthComponent', () => {
  let component: LogouthComponent;
  let fixture: ComponentFixture<LogouthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogouthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogouthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
