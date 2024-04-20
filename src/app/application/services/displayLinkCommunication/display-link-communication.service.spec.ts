import { TestBed } from '@angular/core/testing';

import { DisplayLinkCommunicationService } from './display-link-communication.service';

describe('DisplayLinkCommunicationService', () => {
  let service: DisplayLinkCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayLinkCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
