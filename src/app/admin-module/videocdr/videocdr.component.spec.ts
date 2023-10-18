import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideocdrComponent } from './videocdr.component';

describe('VideocdrComponent', () => {
  let component: VideocdrComponent;
  let fixture: ComponentFixture<VideocdrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideocdrComponent]
    });
    fixture = TestBed.createComponent(VideocdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
