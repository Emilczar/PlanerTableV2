import { TestBed, inject } from '@angular/core/testing';

import { FileDbService } from './file-db.service';

describe('FileDbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileDbService]
    });
  });

  it('should be created', inject([FileDbService], (service: FileDbService) => {
    expect(service).toBeTruthy();
  }));
});
