import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmscdrComponent } from './smscdr.component';

describe('SmscdrComponent', () => {
  let component: SmscdrComponent;
  let fixture: ComponentFixture<SmscdrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmscdrComponent]
    });
    fixture = TestBed.createComponent(SmscdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
