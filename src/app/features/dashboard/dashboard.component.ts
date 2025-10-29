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
    patients: 245,
    appointments: 32,
    surgeries: 8,
    reports: 14
  };

  mriScans = [
    { patient: 'Ravi Kumar', type: 'Brain MRI', date: '2025-10-20', findings: 'Normal', status: 'Completed' },
    { patient: 'Neha Sharma', type: 'Spine MRI', date: '2025-10-21', findings: 'Disc bulge L4-L5', status: 'Completed' },
    { patient: 'Amit Singh', type: 'Cervical MRI', date: '2025-10-22', findings: 'Pending review', status: 'Pending' }
  ];

  emergencyCases = [
    { caseId: 'EMG-101', patient: 'Priya Mehta', condition: 'Severe Head Injury', doctor: 'Dr. Arora', room: 'ICU-1', status: 'Critical' },
    { caseId: 'EMG-102', patient: 'Rahul Verma', condition: 'Spinal Trauma', doctor: 'Dr. Rao', room: 'ER-3', status: 'Stable' },
    { caseId: 'EMG-103', patient: 'Sneha Kapoor', condition: 'Seizures', doctor: 'Dr. Bansal', room: 'ER-5', status: 'Stable' }
  ];

}
