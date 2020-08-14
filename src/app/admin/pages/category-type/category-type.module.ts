import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryTypeRoutingModule } from './category-type-routing.module';
import { CategoryTypeComponent } from './category-type.component';
import { CategoryTypeListComponent } from './category-type-list/category-type-list.component';
import { CategoryTypeAddEditComponent } from './category-type-add-edit/category-type-add-edit.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CategoryTypeComponent, CategoryTypeListComponent, CategoryTypeAddEditComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CategoryTypeRoutingModule
  ]
})
export class CategoryTypeModule { }
