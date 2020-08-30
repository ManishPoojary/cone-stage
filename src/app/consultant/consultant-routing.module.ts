import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultantComponent } from './consultant.component';
import { AuthGuard } from '@app/admin/helpers';
import { CategorySelectionComponent } from './pages/category-selection/category-selection.component';

const routes: Routes = [
  {
    path: '',
    component: ConsultantComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'category-selection',
        component: CategorySelectionComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultantRoutingModule {}
