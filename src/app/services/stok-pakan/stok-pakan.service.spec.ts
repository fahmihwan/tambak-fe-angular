import { TestBed } from '@angular/core/testing';

import { StokPakanService } from './stok-pakan.service';

describe('StokPakanService', () => {
  let service: StokPakanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StokPakanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
