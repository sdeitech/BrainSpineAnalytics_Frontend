import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from '../admin-dashboard/dashboard.component';
import {DoctorDashboardComponent} from '../doctor-dashboard/doctor-dashboard.component'
import {PatientDashboardComponent} from '../patient-dashboard/patient-dashboard.component'
import {LoginService} from '../../../core/services/Login/login.service'


@Component({
  selector: 'app-main-dashboard',
  standalone: true,
  imports: [DashboardComponent,
            DoctorDashboardComponent,
            PatientDashboardComponent,
            CommonModule,
            FormsModule],
  templateUrl: './main-dashboard.component.html',
  styleUrl: './main-dashboard.component.css'
})
export class MainDashboardComponent {
  public Role:any='Admin'
  
  constructor(private loginService:LoginService){

  }
  async ngOnInit(){
     this.Role = await this.loginService.getUserRole();
  }
}
