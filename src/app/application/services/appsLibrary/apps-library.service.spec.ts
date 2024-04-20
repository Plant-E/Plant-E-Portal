import { TestBed } from '@angular/core/testing';

import { AppsLibraryService } from './apps-library.service';

describe('AppsLibraryService', () => {
  let service: AppsLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppsLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
