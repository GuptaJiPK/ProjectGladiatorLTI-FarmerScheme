import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMarketPlaceComponent } from './view-market-place.component';

describe('ViewMarketPlaceComponent', () => {
  let component: ViewMarketPlaceComponent;
  let fixture: ComponentFixture<ViewMarketPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMarketPlaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMarketPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
