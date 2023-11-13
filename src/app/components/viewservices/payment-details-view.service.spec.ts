import { TestBed } from '@angular/core/testing';

import { PaymentDetailsViewService } from './payment-details-view.service';

describe('PaymentDetailsViewService', () => {
  let service: PaymentDetailsViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentDetailsViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
