import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AlertComponent } from './components';
import { HomeComponent } from './pages/home';


@NgModule({
  declarations: [AdminComponent, AlertComponent, HomeComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ],
})
export class AdminModule {}
