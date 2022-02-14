import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarKolamComponent } from './daftar-kolam.component';

describe('DaftarKolamComponent', () => {
  let component: DaftarKolamComponent;
  let fixture: ComponentFixture<DaftarKolamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaftarKolamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarKolamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
