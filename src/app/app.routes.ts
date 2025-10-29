import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { AuthGuard } from './core/Auth-Gaurd/auth-guard.guard';
import { MainDashboardComponent } from './features/dashboards/main-dashboard/main-dashboard.component';

export const routes: Routes = [
  //default
  { path: '', redirectTo: 'login', pathMatch: 'full' },
 
  // normal
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: MainDashboardComponent },  //,canActivate: [AuthGuard]

   //wild card if user enter wrong url 
  { path: '**', redirectTo: 'login', pathMatch: 'full' }

];
