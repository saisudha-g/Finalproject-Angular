import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TollfreecdrComponent } from './tollfreecdr.component';

describe('TollfreecdrComponent', () => {
  let component: TollfreecdrComponent;
  let fixture: ComponentFixture<TollfreecdrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TollfreecdrComponent]
    });
    fixture = TestBed.createComponent(TollfreecdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
