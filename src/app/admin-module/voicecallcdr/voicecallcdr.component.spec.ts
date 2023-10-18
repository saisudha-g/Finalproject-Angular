import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoicecallcdrComponent } from './voicecallcdr.component';

describe('VoicecallcdrComponent', () => {
  let component: VoicecallcdrComponent;
  let fixture: ComponentFixture<VoicecallcdrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoicecallcdrComponent]
    });
    fixture = TestBed.createComponent(VoicecallcdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
