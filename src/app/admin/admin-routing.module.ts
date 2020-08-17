import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './helpers';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './pages/home';

const accountModule = () => import('./pages/account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./pages/users/users.module').then(x => x.UsersModule);

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'consultants', loadChildren: usersModule, canActivate: [AuthGuard] },
  { path: 'account', loadChildren: accountModule },
  { path: 'category-type', loadChildren: () => import('./pages/category-type/category-type.module').then(m => m.CategoryTypeModule) },
  { path: 'category', loadChildren: () => import('./pages/category/category.module').then(m => m.CategoryModule) },

  // otherwise redirect to home
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
