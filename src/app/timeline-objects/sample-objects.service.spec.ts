import { TestBed, inject, ComponentFixture} from '@angular/core/testing';

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


  describe('SampleObjectsService Object tester', () => {
    it('should contian 10 objects', inject([SampleObjectsService], (service: SampleObjectsService) => {
      expect(service.getSamples().length).toBeGreaterThan(9);
    }));

  });




});



