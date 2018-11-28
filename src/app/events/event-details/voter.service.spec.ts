import { TestBed } from '@angular/core/testing';

import { VoterService } from './voter.service';

describe('VoterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VoterService = TestBed.get(VoterService);
    expect(service).toBeTruthy();
  });
});
