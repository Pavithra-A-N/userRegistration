import { TestBed } from '@angular/core/testing';

import { PersonalDetailsViewService } from './personal-details-view.service';

describe('PersonalDetailsViewService', () => {
  let service: PersonalDetailsViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalDetailsViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
