import { TestBed } from '@angular/core/testing';

import { TasksTrackService } from './tasks-track.service';

describe('TasksTrackService', () => {
  let service: TasksTrackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TasksTrackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
