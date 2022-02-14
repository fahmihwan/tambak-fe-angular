import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputStokComponent } from './input-stok.component';

describe('InputStokComponent', () => {
  let component: InputStokComponent;
  let fixture: ComponentFixture<InputStokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputStokComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputStokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
