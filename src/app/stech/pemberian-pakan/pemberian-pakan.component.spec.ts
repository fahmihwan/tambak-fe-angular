import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PemberianPakanComponent } from './pemberian-pakan.component';

describe('PemberianPakanComponent', () => {
  let component: PemberianPakanComponent;
  let fixture: ComponentFixture<PemberianPakanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PemberianPakanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PemberianPakanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
