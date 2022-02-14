import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailKolamComponent } from './detail-kolam.component';

describe('DetailKolamComponent', () => {
  let component: DetailKolamComponent;
  let fixture: ComponentFixture<DetailKolamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailKolamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailKolamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
