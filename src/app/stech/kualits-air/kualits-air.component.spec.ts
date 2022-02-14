import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KualitsAirComponent } from './kualits-air.component';

describe('KualitsAirComponent', () => {
  let component: KualitsAirComponent;
  let fixture: ComponentFixture<KualitsAirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KualitsAirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KualitsAirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
