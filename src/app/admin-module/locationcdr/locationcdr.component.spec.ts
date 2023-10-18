import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationcdrComponent } from './locationcdr.component';

describe('LocationcdrComponent', () => {
  let component: LocationcdrComponent;
  let fixture: ComponentFixture<LocationcdrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationcdrComponent]
    });
    fixture = TestBed.createComponent(LocationcdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
