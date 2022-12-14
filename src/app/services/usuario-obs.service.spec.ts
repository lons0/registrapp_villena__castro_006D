import { TestBed } from '@angular/core/testing';

import { UsuarioObsService } from './usuario-obs.service';

describe('UsuarioObsService', () => {
  let service: UsuarioObsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioObsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
