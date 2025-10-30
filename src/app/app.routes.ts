import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { AuthGuard } from './core/Auth-Gaurd/auth-guard.guard';
import { MainDashboardComponent } from './features/dashboards/main-dashboard/main-dashboard.component';
import { MasterLayoutComponent } from './core/layout/master-layout/master-layout.component';
import { DataIntegrationComponent } from './features/admin/data-integration/data-integration.component';
import { ReferresComponent } from './features/admin/referres/referres.component';
import { StaffingComponent } from './features/admin/staffing/staffing.component';
import { LocationsComponent } from './features/performance/locations/locations.component';
import { DiagnosticsComponent } from './features/clinical-operations/diagnostics/diagnostics.component';
import { ProvidersComponent } from './features/clinical-operations/providers/providers.component';
import { TBIInsightsComponent } from './features/clinical-operations/TBI-insights/tbi-insights.component';
import { TelehealthComponent } from './features/clinical-operations/telehealth/telehealth.component';
import { AppointmentsComponent } from './features/performance/appointments/appointments.component';
import { RevenueAnalyticsComponent } from './features/performance/revenue-analytics/revenue-analytics.component';

export const routes: Routes = [
  //default
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  
  // normal  
  {
    path: '',component: MasterLayoutComponent,canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: MainDashboardComponent,title: 'Dashboard'},
      { path: 'dataIntergration', component: DataIntegrationComponent,title: 'Data Intergration'},
      { path: 'referres', component: ReferresComponent,title: 'Referres'},
      { path: 'staffing', component: StaffingComponent,title: 'Staffing'},
      { path: 'diagnostics', component: DiagnosticsComponent,title: 'Diagnostics'},
      { path: 'providers', component: ProvidersComponent,title: 'Providers'},
      { path: 'tbiInsights', component: TBIInsightsComponent,title: 'TBI-Insights'},
      { path: 'telehealth', component: TelehealthComponent,title: 'Telehealth'},
      { path: 'appointments', component: AppointmentsComponent,title: 'Appointments'},
      { path: 'locations', component: LocationsComponent,title: 'Locations'},
      { path: 'revenueAnalytics', component: RevenueAnalyticsComponent,title: 'Revenue-Analytics'},

    ]
  },
  { path: 'login', component: LoginComponent,title: 'Log-In' },
  { path: 'dashboard', component: MainDashboardComponent,title: 'Dashboard',canActivate: [AuthGuard] },

   //wild card if user enter wrong url 
  { path: '**', redirectTo: 'login', pathMatch: 'full' }

];
