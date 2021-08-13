import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyinsuranceComponent } from './applyinsurance.component';

describe('ApplyinsuranceComponent', () => {
  let component: ApplyinsuranceComponent;
  let fixture: ComponentFixture<ApplyinsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyinsuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyinsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
