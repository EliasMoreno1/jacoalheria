import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrentesComponent } from './correntes.component';

describe('CorrentesComponent', () => {
  let component: CorrentesComponent;
  let fixture: ComponentFixture<CorrentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
