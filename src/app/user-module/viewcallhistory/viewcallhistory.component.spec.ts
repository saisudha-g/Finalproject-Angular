import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcallhistoryComponent } from './viewcallhistory.component';

describe('ViewcallhistoryComponent', () => {
  let component: ViewcallhistoryComponent;
  let fixture: ComponentFixture<ViewcallhistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewcallhistoryComponent]
    });
    fixture = TestBed.createComponent(ViewcallhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
