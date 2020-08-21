import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantLoginComponent } from './consultant-login.component';

describe('ConsultantLoginComponent', () => {
  let component: ConsultantLoginComponent;
  let fixture: ComponentFixture<ConsultantLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultantLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultantLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
