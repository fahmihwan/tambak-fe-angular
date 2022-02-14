import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaporanKolamComponent } from './laporan-kolam.component';

describe('LaporanKolamComponent', () => {
  let component: LaporanKolamComponent;
  let fixture: ComponentFixture<LaporanKolamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaporanKolamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaporanKolamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
