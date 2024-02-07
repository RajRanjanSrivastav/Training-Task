import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MakingTasksComponent } from './components/making-tasks/making-tasks.component';
import { LoginComponent } from './components/login/login.component';
import { authGuardGuard } from './AuthGuard/auth-guard.guard';


const routes: Routes = [
  {
    path: 'app-making-tasks',
    canActivate:[authGuardGuard],
    component: MakingTasksComponent,
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
  exports: [RouterModule]
})
export class AppRoutingModule { }
