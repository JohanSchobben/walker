import { TestBed } from '@angular/core/testing';

import { SprintDatabaseService } from './sprint-database.service';

describe('SprintDatabaseService', () => {
  let service: SprintDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SprintDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
