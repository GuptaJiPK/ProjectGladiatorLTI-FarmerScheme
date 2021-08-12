import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropforsaleComponent } from './cropforsale.component';

describe('CropforsaleComponent', () => {
  let component: CropforsaleComponent;
  let fixture: ComponentFixture<CropforsaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CropforsaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CropforsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
