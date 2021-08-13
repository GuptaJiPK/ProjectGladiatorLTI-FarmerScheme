import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmarketplacehomeComponent } from './viewmarketplacehome.component';

describe('ViewmarketplacehomeComponent', () => {
  let component: ViewmarketplacehomeComponent;
  let fixture: ComponentFixture<ViewmarketplacehomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewmarketplacehomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmarketplacehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
