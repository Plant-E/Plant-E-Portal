import { TestBed } from '@angular/core/testing';

import { DisplayLinkConnectionService } from './display-link-connection.service';

describe('DisplayLinkConnectionService', () => {
  let service: DisplayLinkConnectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayLinkConnectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
