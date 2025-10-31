import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cohorts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cohorts.component.html',
  styleUrl: './cohorts.component.css'
})
export class CohortsComponent {
    cohorts = [
    { name: 'Injection Patients 18-30 Age', doctor: 'Dr. Lee', patients: 126, followup: '30%', change: '+32%' },
    { name: 'Control Group 45-60 Age', doctor: 'Dr. Lee', patients: 1, followup: '30%', change: '+21%' },
    { name: 'Post Surgery Recovery', doctor: 'Dr. Lee', patients: 120, followup: '30%', change: '+31%' }
  ];

  pages = [1,2,3,4,5,6];
  page = 1;
}
