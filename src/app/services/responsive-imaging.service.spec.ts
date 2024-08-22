import { TestBed } from '@angular/core/testing';

import { ResponsiveImagingService } from './responsive-imaging.service';

describe('ResponsiveImagingService', () => {
  let service: ResponsiveImagingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponsiveImagingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
