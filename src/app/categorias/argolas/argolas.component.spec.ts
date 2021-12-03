import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArgolasComponent } from './argolas.component';

describe('ArgolasComponent', () => {
  let component: ArgolasComponent;
  let fixture: ComponentFixture<ArgolasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArgolasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArgolasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
