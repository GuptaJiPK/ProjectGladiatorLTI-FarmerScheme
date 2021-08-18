import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCurrentBidsComponent } from './view-current-bids.component';

describe('ViewCurrentBidsComponent', () => {
  let component: ViewCurrentBidsComponent;
  let fixture: ComponentFixture<ViewCurrentBidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCurrentBidsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCurrentBidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
