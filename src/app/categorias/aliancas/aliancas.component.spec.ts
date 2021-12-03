import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AliancasComponent } from './aliancas.component';

describe('AliancasComponent', () => {
  let component: AliancasComponent;
  let fixture: ComponentFixture<AliancasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AliancasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AliancasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
