import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoSoUngVienComponent } from './ho-so-ung-vien.component';

describe('HoSoUngVienComponent', () => {
  let component: HoSoUngVienComponent;
  let fixture: ComponentFixture<HoSoUngVienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HoSoUngVienComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HoSoUngVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
