import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StechComponent } from './stech.component';

describe('StechComponent', () => {
  let component: StechComponent;
  let fixture: ComponentFixture<StechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
