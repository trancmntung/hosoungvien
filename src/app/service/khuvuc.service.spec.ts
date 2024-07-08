import { TestBed } from '@angular/core/testing';

import { QuocGiaService } from './khuvuc.service';

describe('KhuvucService', () => {
  let service: QuocGiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuocGiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
