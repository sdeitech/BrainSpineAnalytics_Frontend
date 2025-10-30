import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-staffing',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './staffing.component.html',
  styleUrl: './staffing.component.css'
})

export class StaffingComponent {
  
  stats = [
    { title: 'New Referrer', value: 18, sub: '+3 from last month' },
    { title: 'Open Positions', value: 8, sub: 'Need immediate attention' },
    { title: 'Coverage Gaps', value: 45, sub: 'Days this month' },
    { title: 'Active Staff', value: 127, sub: 'Across all locations' },
    { title: 'Staff Onboarded', value: 12, sub: 'This quarter' }
  ];

  roles = [
    { name: 'NP', avg: '7h avg' },
    { name: 'PA', avg: '8.5h avg' },
    { name: 'MD', avg: '8h avg' },
    { name: 'MA', avg: '8.5h avg' },
    { name: 'Front Desk', avg: '7.5h avg' }
  ];
}
