import { TestBed } from '@angular/core/testing';

import { HoSoUngVienService } from './ho-so-ung-vien.service';

describe('HoSoUngVienService', () => {
  let service: HoSoUngVienService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoSoUngVienService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
