import { TestBed } from '@angular/core/testing';

import { BashCommandsService } from './bash-commands.service';

describe('BashCommandsService', () => {
  let service: BashCommandsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BashCommandsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
