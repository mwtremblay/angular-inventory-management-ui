import { TestBed } from '@angular/core/testing';

import { WorkorderServiceService } from './workorder-service.service';

describe('WorkorderServiceService', () => {
  let service: WorkorderServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkorderServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
