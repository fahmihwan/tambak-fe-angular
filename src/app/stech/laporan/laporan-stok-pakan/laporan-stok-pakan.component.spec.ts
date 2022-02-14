import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaporanStokPakanComponent } from './laporan-stok-pakan.component';

describe('LaporanStokPakanComponent', () => {
  let component: LaporanStokPakanComponent;
  let fixture: ComponentFixture<LaporanStokPakanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaporanStokPakanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaporanStokPakanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
