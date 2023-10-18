import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoipconcdrComponent } from './voipconcdr.component';

describe('VoipconcdrComponent', () => {
  let component: VoipconcdrComponent;
  let fixture: ComponentFixture<VoipconcdrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoipconcdrComponent]
    });
    fixture = TestBed.createComponent(VoipconcdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
