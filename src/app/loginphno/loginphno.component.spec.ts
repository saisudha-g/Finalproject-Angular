import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginphnoComponent } from './loginphno.component';

describe('LoginphnoComponent', () => {
  let component: LoginphnoComponent;
  let fixture: ComponentFixture<LoginphnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginphnoComponent]
    });
    fixture = TestBed.createComponent(LoginphnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
