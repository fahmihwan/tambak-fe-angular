import { TestBed } from '@angular/core/testing';

import { SiklusService } from './siklus.service';

describe('SiklusService', () => {
  let service: SiklusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiklusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
