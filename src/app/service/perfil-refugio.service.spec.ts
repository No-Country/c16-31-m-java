import { TestBed } from '@angular/core/testing';

import { PerfilRefugioService } from './perfil-refugio.service';

describe('PerfilRefugioService', () => {
  let service: PerfilRefugioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerfilRefugioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
