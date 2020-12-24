import { TestBed } from '@angular/core/testing';

import { ProfileDatabaseService } from './profile-database.service';

describe('ProfileDatabaseService', () => {
  let service: ProfileDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
