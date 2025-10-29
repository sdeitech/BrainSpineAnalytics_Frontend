import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { AuthGuard } from './core/Auth-Gaurd/auth-guard.guard';

export const routes: Routes = [
  //default
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  
  //wild card if user enter wrong url 
  { path: '**', redirectTo: 'login'},

  // normal
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent }  //,canActivate: [AuthGuard]
];
