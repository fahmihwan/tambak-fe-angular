import { TestBed } from '@angular/core/testing';

import { TambakService } from './tambak.service';

describe('TambakService', () => {
  let service: TambakService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TambakService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
