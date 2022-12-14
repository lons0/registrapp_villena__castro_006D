import { TestBed } from '@angular/core/testing';

import { ServQRService } from './serv-qr.service';

describe('ServQRService', () => {
  let service: ServQRService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServQRService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
