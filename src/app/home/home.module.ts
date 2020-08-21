import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ConsultantSignupComponent } from './pages/consultant-signup/consultant-signup.component';
import { ConsultantLoginComponent } from './pages/consultant-login/consultant-login.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [HomeComponent, ConsultantSignupComponent, ConsultantLoginComponent, NavbarComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
