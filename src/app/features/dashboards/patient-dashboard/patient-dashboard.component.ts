import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-patient-dashboard',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './patient-dashboard.component.html',
  styleUrl: './patient-dashboard.component.css'
})
export class PatientDashboardComponent {
  public UserName:any=''
  dashboardData: any = {};
  upcomingAppointments: any[] = [];
  recentReports: any[] = [];
  prescriptions: any[] = [];

  constructor() {}

  async ngOnInit(): Promise<void> {
    this.UserName= await localStorage.getItem('userRole');
    this.loadDashboard();
  }

  loadDashboard() {
    // Mock API data (replace with real API)
    this.dashboardData = {
      upcomingAppointments: 2,
      prescriptions: 4,
      labReports: 3,
      billingDue: 0,
      patientName: 'Champ',
    };

    this.upcomingAppointments = [
      { date: '2025-11-01', doctor: 'Dr. Mehta', type: 'Follow-up', time: '10:00 AM', department: 'Neurology' },
      { date: '2025-11-04', doctor: 'Dr. Sharma', type: 'MRI Review', time: '3:30 PM', department: 'Radiology' },
    ];

    this.recentReports = [
      { test: 'MRI Brain', date: '2025-10-25', result: 'Normal', status: 'Available' },
      { test: 'Blood Test', date: '2025-10-26', result: 'Low Iron', status: 'Available' },
      { test: 'ECG', date: '2025-10-27', result: '-', status: 'Pending' },
    ];

    this.prescriptions = [
      { medicine: 'Paracetamol 500mg', dosage: '1 tab twice daily', duration: '5 days', doctor: 'Dr. Mehta' },
      { medicine: 'Vitamin D3', dosage: '1 tab daily', duration: '10 days', doctor: 'Dr. Sharma' },
    ];
  }
}
