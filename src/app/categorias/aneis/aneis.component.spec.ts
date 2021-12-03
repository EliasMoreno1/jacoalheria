import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AneisComponent } from './aneis.component';

describe('AneisComponent', () => {
  let component: AneisComponent;
  let fixture: ComponentFixture<AneisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AneisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AneisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
