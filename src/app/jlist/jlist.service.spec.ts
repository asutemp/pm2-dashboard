import { TestBed } from '@angular/core/testing';

import { JlistService } from './jlist.service';

describe('JlistService', () => {
  let service: JlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
