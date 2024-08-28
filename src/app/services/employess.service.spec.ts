import { TestBed } from '@angular/core/testing';

import { EmployeesService } from './employess.service';

describe('EmployessService', () => {
  let service: EmployeesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
