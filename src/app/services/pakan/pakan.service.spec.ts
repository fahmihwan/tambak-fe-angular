import { TestBed } from '@angular/core/testing';

import { PakanService } from './pakan.service';

describe('PakanService', () => {
  let service: PakanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PakanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
