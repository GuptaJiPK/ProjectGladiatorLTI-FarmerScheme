import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiddermainpageComponent } from './biddermainpage.component';

describe('BiddermainpageComponent', () => {
  let component: BiddermainpageComponent;
  let fixture: ComponentFixture<BiddermainpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiddermainpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiddermainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
