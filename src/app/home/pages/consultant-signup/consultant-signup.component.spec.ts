import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantSignupComponent } from './consultant-signup.component';

describe('ConsultantSignupComponent', () => {
  let component: ConsultantSignupComponent;
  let fixture: ComponentFixture<ConsultantSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultantSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultantSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
