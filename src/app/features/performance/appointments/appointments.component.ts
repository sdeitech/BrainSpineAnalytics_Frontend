import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.css'
})
export class AppointmentsComponent {
   summary = {
    total: 320,
    completed: 245,
    pending: 60,
    cancelled: 15
  };

  todayAppointments = [
    { patient: 'Amit Sharma', doctor: 'Dr. Rajeev', time: '09:30 AM', status: 'Completed' },
    { patient: 'Neha Verma', doctor: 'Dr. Mehta', time: '10:00 AM', status: 'Pending' },
    { patient: 'Rohan Gupta', doctor: 'Dr. Shalini', time: '11:15 AM', status: 'Completed' },
    { patient: 'Priya Singh', doctor: 'Dr. Arjun', time: '12:00 PM', status: 'Cancelled' },
    { patient: 'Vikas Jain', doctor: 'Dr. Nisha', time: '01:30 PM', status: 'Pending' }
  ];

  alerts = [
    { icon: 'bi bi-clock-history text-warning', msg: 'Some patients waiting for doctor' },
    { icon: 'bi bi-person-check text-success', msg: 'High completion rate today' },
    { icon: 'bi bi-calendar-x text-danger', msg: 'Few cancellations noticed' }
  ];
}
