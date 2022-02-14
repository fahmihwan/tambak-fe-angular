import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuatSiklusComponent } from './buat-siklus.component';

describe('BuatSiklusComponent', () => {
  let component: BuatSiklusComponent;
  let fixture: ComponentFixture<BuatSiklusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuatSiklusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuatSiklusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
