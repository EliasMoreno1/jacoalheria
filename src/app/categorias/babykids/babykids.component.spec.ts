import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabykidsComponent } from './babykids.component';

describe('BabykidsComponent', () => {
  let component: BabykidsComponent;
  let fixture: ComponentFixture<BabykidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabykidsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BabykidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
