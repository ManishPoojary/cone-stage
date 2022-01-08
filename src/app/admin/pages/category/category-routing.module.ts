import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryComponent } from './category.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryAddEditComponent } from './category-add-edit/category-add-edit.component';

const routes: Routes = [
  {
    path: '', component: CategoryComponent,
    children: [
        { path: '', component: CategoryListComponent },
        { path: 'add', component: CategoryAddEditComponent },
        { path: 'edit/:id', component: CategoryAddEditComponent }
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
