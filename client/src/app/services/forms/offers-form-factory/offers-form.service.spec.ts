import { TestBed } from '@angular/core/testing';
import { OffersFormService } from './offers-form.service';

describe('OffersFormService', () => {
  let service: OffersFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffersFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
