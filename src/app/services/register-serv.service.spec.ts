import { TestBed } from '@angular/core/testing';

import { RegisterServService } from './register-serv.service';

describe('RegisterServService', () => {
  let service: RegisterServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
