import { TestBed } from '@angular/core/testing';

import { PerfilAnimalsService } from './perfil-animals.service';

describe('PerfilAnimalsService', () => {
  let service: PerfilAnimalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerfilAnimalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
