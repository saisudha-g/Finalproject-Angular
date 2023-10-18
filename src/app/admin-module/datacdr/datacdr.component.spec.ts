import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatacdrComponent } from './datacdr.component';

describe('DatacdrComponent', () => {
  let component: DatacdrComponent;
  let fixture: ComponentFixture<DatacdrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatacdrComponent]
    });
    fixture = TestBed.createComponent(DatacdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
