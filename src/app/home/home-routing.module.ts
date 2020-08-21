import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { ConsultantLoginComponent } from './pages/consultant-login/consultant-login.component';
import { ConsultantSignupComponent } from './pages/consultant-signup/consultant-signup.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'consultant-signin', component: ConsultantLoginComponent },
  { path: 'consultant-signup', component: ConsultantSignupComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
