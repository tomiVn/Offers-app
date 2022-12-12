import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticPagesTemplateComponent } from './static-pages-template.component';

describe('StaticPagesTemplateComponent', () => {
  let component: StaticPagesTemplateComponent;
  let fixture: ComponentFixture<StaticPagesTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticPagesTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaticPagesTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
