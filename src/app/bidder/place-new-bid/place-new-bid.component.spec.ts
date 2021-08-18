import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceNewBidComponent } from './place-new-bid.component';

describe('PlaceNewBidComponent', () => {
  let component: PlaceNewBidComponent;
  let fixture: ComponentFixture<PlaceNewBidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceNewBidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceNewBidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
