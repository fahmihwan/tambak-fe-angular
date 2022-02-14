import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StokPakanComponent } from './stok-pakan.component';

describe('StokPakanComponent', () => {
  let component: StokPakanComponent;
  let fixture: ComponentFixture<StokPakanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StokPakanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StokPakanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
