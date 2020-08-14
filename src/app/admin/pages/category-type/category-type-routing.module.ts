import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryTypeComponent } from './category-type.component';
import { CategoryTypeListComponent } from './category-type-list/category-type-list.component';
import { CategoryTypeAddEditComponent } from './category-type-add-edit/category-type-add-edit.component';

const routes: Routes = [
  {
    path: '', component: CategoryTypeComponent,
    children: [
        { path: '', component: CategoryTypeListComponent },
        { path: 'add', component: CategoryTypeAddEditComponent },
        { path: 'edit/:id', component: CategoryTypeAddEditComponent }
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryTypeRoutingModule {}
