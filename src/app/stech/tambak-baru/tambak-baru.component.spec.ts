import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TambakBaruComponent } from './tambak-baru.component';

describe('TambakBaruComponent', () => {
  let component: TambakBaruComponent;
  let fixture: ComponentFixture<TambakBaruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TambakBaruComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TambakBaruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
