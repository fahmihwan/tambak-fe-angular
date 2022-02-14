import { TestBed } from '@angular/core/testing';

import { PanenService } from './panen.service';

describe('PanenService', () => {
  let service: PanenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
