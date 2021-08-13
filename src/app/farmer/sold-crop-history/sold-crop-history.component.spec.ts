import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldCropHistoryComponent } from './sold-crop-history.component';

describe('SoldCropHistoryComponent', () => {
  let component: SoldCropHistoryComponent;
  let fixture: ComponentFixture<SoldCropHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoldCropHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoldCropHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
