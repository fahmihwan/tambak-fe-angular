import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahKolamComponent } from './tambah-kolam.component';

describe('TambahKolamComponent', () => {
  let component: TambahKolamComponent;
  let fixture: ComponentFixture<TambahKolamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TambahKolamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahKolamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
