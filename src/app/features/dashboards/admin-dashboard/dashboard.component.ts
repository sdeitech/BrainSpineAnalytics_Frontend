import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
   constructor() { }

  ngOnInit(): void {
  }

dashboardData = {
    totalPatients: 1245,
    activeStaff: 230,
    departments: 12,
    revenue: 1850000
  };

  departmentStats = [
    { name: 'Neurology', patients: 120, doctors: 10, revenue: 450000, satisfaction: 94 },
    { name: 'Orthopedics', patients: 150, doctors: 8, revenue: 370000, satisfaction: 89 },
    { name: 'Cardiology', patients: 200, doctors: 12, revenue: 520000, satisfaction: 92 },
    { name: 'Pediatrics', patients: 90, doctors: 5, revenue: 180000, satisfaction: 85 }
  ];

  financeData = [
    { month: 'August', revenue: 1500000, expenses: 900000, profit: 600000 },
    { month: 'September', revenue: 1800000, expenses: 1100000, profit: 700000 },
    { month: 'October', revenue: 1850000, expenses: 1200000, profit: 650000 }
  ];

  adminAlerts = [
    { icon: 'bi bi-exclamation-triangle text-danger', message: 'ICU occupancy reaching 90% capacity' },
    { icon: 'bi bi-person-fill-up text-primary', message: 'New doctor onboarding - Dr. Rajesh' },
    { icon: 'bi bi-cash text-success', message: 'Monthly revenue target achieved' }
  ];
}
