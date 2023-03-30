import { TestBed } from '@angular/core/testing';

import { PhonecasesService } from './phonecases.service';

describe('PhonecasesService', () => {
  let service: PhonecasesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhonecasesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
