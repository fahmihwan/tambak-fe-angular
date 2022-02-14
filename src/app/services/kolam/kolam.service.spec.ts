import { TestBed } from '@angular/core/testing';

import { KolamService } from './kolam.service';

describe('KolamService', () => {
  let service: KolamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KolamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
