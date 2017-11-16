import { TestBed, inject } from '@angular/core/testing';

import { SampleObjectsService } from './sample-objects.service';

describe('SampleObjectsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SampleObjectsService]
    });
  });

  it('should be created', inject([SampleObjectsService], (service: SampleObjectsService) => {
    expect(service).toBeTruthy();
  }));
});
