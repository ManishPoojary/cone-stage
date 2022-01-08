import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultantRoutingModule } from './consultant-routing.module';
import { ConsultantComponent } from './consultant.component';
import { CategorySelectionComponent } from './pages/category-selection/category-selection.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ConsultantHomeComponent } from './pages/consultant-home/consultant-home.component';

@NgModule({
  declarations: [
    ConsultantComponent,
    CategorySelectionComponent,
    ConsultantHomeComponent,
  ],
  imports: [
    CommonModule,
    ConsultantRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
})
export class ConsultantModule {}
