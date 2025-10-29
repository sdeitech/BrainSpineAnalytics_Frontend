import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doctor-dashboard',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './doctor-dashboard.component.html',
  styleUrl: './doctor-dashboard.component.css'
})
export class DoctorDashboardComponent {
   dashboardData = {
    patients: 42,
    appointments: 8,
    surgeries: 3,
    prescriptions: 15
  };

  upcomingAppointments = [
    { patient: 'Ravi Sharma', time: '10:30 AM', type: 'Consultation', status: 'Confirmed' },
    { patient: 'Priya Singh', time: '11:15 AM', type: 'Follow-up', status: 'Pending' },
    { patient: 'Aman Verma', time: '12:00 PM', type: 'MRI Review', status: 'Confirmed' }
  ];

  followUpPatients = [
    { patient: 'Anjali Rao', lastVisit: '22 Oct 2025', diagnosis: 'Cervical Pain', nextVisit: '29 Oct 2025' },
    { patient: 'Vikas Mehta', lastVisit: '20 Oct 2025', diagnosis: 'Spine Surgery', nextVisit: '2 Nov 2025' }
  ];
}
