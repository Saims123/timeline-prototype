import { TestBed, inject } from '@angular/core/testing';

import { TestCdkService } from './test-cdk.service';

describe('TestCdkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestCdkService]
    });
  });

  it('should be created', inject([TestCdkService], (service: TestCdkService) => {
    expect(service).toBeTruthy();
  }));
});
