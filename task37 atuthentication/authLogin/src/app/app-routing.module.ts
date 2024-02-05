import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './authGuard/auth.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    canActivate:[authGuard],
    component: DashboardComponent,
  },
  {
    path:'',
    component: LoginComponent,
  },
  {
    path:'**',
    redirectTo: 'LoginComponent',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
