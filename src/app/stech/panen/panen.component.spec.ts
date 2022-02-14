import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanenComponent } from './panen.component';

describe('PanenComponent', () => {
  let component: PanenComponent;
  let fixture: ComponentFixture<PanenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
