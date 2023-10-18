import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoipcdrComponent } from './voipcdr.component';

describe('VoipcdrComponent', () => {
  let component: VoipcdrComponent;
  let fixture: ComponentFixture<VoipcdrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoipcdrComponent]
    });
    fixture = TestBed.createComponent(VoipcdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
