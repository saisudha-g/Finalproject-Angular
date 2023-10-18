import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoamingcdrComponent } from './roamingcdr.component';

describe('RoamingcdrComponent', () => {
  let component: RoamingcdrComponent;
  let fixture: ComponentFixture<RoamingcdrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoamingcdrComponent]
    });
    fixture = TestBed.createComponent(RoamingcdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
