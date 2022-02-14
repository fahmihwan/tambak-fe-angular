import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStokComponent } from './update-stok.component';

describe('UpdateStokComponent', () => {
  let component: UpdateStokComponent;
  let fixture: ComponentFixture<UpdateStokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateStokComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
