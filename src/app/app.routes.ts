import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { AuthGuard } from './core/Auth-Gaurd/auth-guard.guard';
import { MainDashboardComponent } from './features/dashboards/main-dashboard/main-dashboard.component';
import { MasterLayoutComponent } from './layout/master-layout/master-layout.component';

export const routes: Routes = [
  //default
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    component: MasterLayoutComponent,
    children: [
      { path: 'dashboard', component: MainDashboardComponent }
    ]
  },
  // normal
  { path: 'login', component: LoginComponent,title: 'Log-In' },
  { path: 'dashboard', component: MainDashboardComponent,title: 'Dashboard' },  //,canActivate: [AuthGuard]

   //wild card if user enter wrong url 
  { path: '**', redirectTo: 'login', pathMatch: 'full' }

];
