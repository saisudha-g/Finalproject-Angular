import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchcdrComponent } from './searchcdr.component';

describe('SearchcdrComponent', () => {
  let component: SearchcdrComponent;
  let fixture: ComponentFixture<SearchcdrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchcdrComponent]
    });
    fixture = TestBed.createComponent(SearchcdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
