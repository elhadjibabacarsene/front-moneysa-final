import { TestBed } from '@angular/core/testing';

import { PipeFilterService } from './pipe-filter.service';

describe('PipeFilterService', () => {
  let service: PipeFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PipeFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
