import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceSellRequestComponent } from './place-sell-request.component';

describe('PlaceSellRequestComponent', () => {
  let component: PlaceSellRequestComponent;
  let fixture: ComponentFixture<PlaceSellRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceSellRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceSellRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
