import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultantRoutingModule } from './consultant-routing.module';
import { ConsultantComponent } from './consultant.component';


@NgModule({
  declarations: [ConsultantComponent],
  imports: [
    CommonModule,
    ConsultantRoutingModule
  ]
})
export class ConsultantModule { }
