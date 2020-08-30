import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultantRoutingModule } from './consultant-routing.module';
import { ConsultantComponent } from './consultant.component';
import { CategorySelectionComponent } from './pages/category-selection/category-selection.component';


@NgModule({
  declarations: [ConsultantComponent, CategorySelectionComponent],
  imports: [
    CommonModule,
    ConsultantRoutingModule
  ]
})
export class ConsultantModule { }
