import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcdrComponent } from './viewcdr.component';

describe('ViewcdrComponent', () => {
  let component: ViewcdrComponent;
  let fixture: ComponentFixture<ViewcdrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewcdrComponent]
    });
    fixture = TestBed.createComponent(ViewcdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
