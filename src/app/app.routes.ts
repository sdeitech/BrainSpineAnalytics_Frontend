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
import { CohortsComponent } from './features/cohorts/cohorts.component';
import { OutcomeComponent } from './features/outcome/outcome.component';
import { ProcedureComponent } from './features/procedure/procedure.component';
import { UserProfileComponent } from './shared/Modules/user-profile/user-profile.component';
import { InsuranceComponent } from './features/admin/insurance/insurance.component';

export const routes: Routes = [
  //default
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  
  // normal  
  {
    path: '',component: MasterLayoutComponent,canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: MainDashboardComponent,title: 'Dashboard',canActivate: [AuthGuard]},
      { path: 'data-integration', component: DataIntegrationComponent,title: 'Data Intergration',canActivate: [AuthGuard]},
      { path: 'referres', component: ReferresComponent,title: 'Referres',canActivate: [AuthGuard]},
      { path: 'staffing', component: StaffingComponent,title: 'Staffing',canActivate: [AuthGuard]},
      { path: 'insurance', component: InsuranceComponent,title: 'Staffing',canActivate: [AuthGuard]},
      { path: 'diagnostics', component: DiagnosticsComponent,title: 'Diagnostics',canActivate: [AuthGuard]},
      { path: 'providers', component: ProvidersComponent,title: 'Providers',canActivate: [AuthGuard]},
      { path: 'tbi-insights', component: TBIInsightsComponent,title: 'TBI-Insights',canActivate: [AuthGuard]},
      { path: 'telehealth', component: TelehealthComponent,title: 'Telehealth',canActivate: [AuthGuard]},
      { path: 'appointments', component: AppointmentsComponent,title: 'Appointments',canActivate: [AuthGuard]},
      { path: 'locations', component: LocationsComponent,title: 'Locations',canActivate: [AuthGuard]},
      { path: 'revenue-analytics', component: RevenueAnalyticsComponent,title: 'Revenue-Analytics',canActivate: [AuthGuard]},
      
      { path: 'cohorts', component: CohortsComponent,title: 'Cohorts',canActivate: [AuthGuard]},
      { path: 'procedure', component: ProcedureComponent,title: 'Procedure',canActivate: [AuthGuard]},
      { path: 'outcome', component: OutcomeComponent,title: 'Outcome',canActivate: [AuthGuard]},

      { path: 'userProfile', component: UserProfileComponent,title: 'Profile',canActivate: [AuthGuard]},

      

    ]
  },
  { path: 'login', component: LoginComponent,title: 'Log-In' },
  { path: 'dashboard', component: MainDashboardComponent,title: 'Dashboard',canActivate: [AuthGuard] },

   //wild card if user enter wrong url 
  { path: '**', redirectTo: 'login', pathMatch: 'full' }

];
