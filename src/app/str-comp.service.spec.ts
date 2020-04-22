import { TestBed } from '@angular/core/testing';

import { StrCompService } from './str-comp.service';

describe('StrCompService', () => {
  let service: StrCompService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StrCompService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
