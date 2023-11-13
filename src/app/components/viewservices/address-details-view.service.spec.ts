import { TestBed } from '@angular/core/testing';

import { AddressDetailsViewService } from './address-details-view.service';

describe('AddressDetailsViewService', () => {
  let service: AddressDetailsViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddressDetailsViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
