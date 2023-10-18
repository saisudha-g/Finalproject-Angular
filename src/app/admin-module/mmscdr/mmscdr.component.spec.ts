import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmscdrComponent } from './mmscdr.component';

describe('MmscdrComponent', () => {
  let component: MmscdrComponent;
  let fixture: ComponentFixture<MmscdrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MmscdrComponent]
    });
    fixture = TestBed.createComponent(MmscdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
