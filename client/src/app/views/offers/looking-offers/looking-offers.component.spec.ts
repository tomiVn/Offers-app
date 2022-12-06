import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookingOffersComponent } from './looking-offers.component';

describe('LookingOffersComponent', () => {
  let component: LookingOffersComponent;
  let fixture: ComponentFixture<LookingOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LookingOffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LookingOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
