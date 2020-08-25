import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultantComponent } from './consultant.component';
import { AuthGuard } from '@app/admin/helpers';

const routes: Routes = [
  { path: '', component: ConsultantComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultantRoutingModule {}
