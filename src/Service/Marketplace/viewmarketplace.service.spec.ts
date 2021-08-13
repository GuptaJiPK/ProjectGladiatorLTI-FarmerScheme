import { TestBed } from '@angular/core/testing';

import { ViewmarketplaceService } from './viewmarketplace.service';

describe('ViewmarketplaceService', () => {
  let service: ViewmarketplaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewmarketplaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
