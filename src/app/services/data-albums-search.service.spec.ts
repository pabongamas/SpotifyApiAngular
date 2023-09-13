import { TestBed } from '@angular/core/testing';

import { DataAlbumsSearchService } from './data-albums-search.service';

describe('DataAlbumsSearchService', () => {
  let service: DataAlbumsSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataAlbumsSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
