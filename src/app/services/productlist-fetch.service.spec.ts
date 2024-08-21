import { TestBed } from '@angular/core/testing';

import { ProductlistFetchService } from './productlist-fetch.service';

describe('ProductlistFetchService', () => {
  let service: ProductlistFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductlistFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
