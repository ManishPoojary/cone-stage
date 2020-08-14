import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryTypeAddEditComponent } from './category-type-add-edit.component';

describe('CategoryTypeAddEditComponent', () => {
  let component: CategoryTypeAddEditComponent;
  let fixture: ComponentFixture<CategoryTypeAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryTypeAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryTypeAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
