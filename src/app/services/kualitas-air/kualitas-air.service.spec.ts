import { TestBed } from '@angular/core/testing';

import { KualitasAirService } from './kualitas-air.service';

describe('KualitasAirService', () => {
  let service: KualitasAirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KualitasAirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
