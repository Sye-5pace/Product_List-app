import { TestBed } from '@angular/core/testing';

import { ProductsFacadeService } from './products-facade.service';

describe('ProductsFacadeService', () => {
  let service: ProductsFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
