import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-diagnostics',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './diagnostics.component.html',
  styleUrl: './diagnostics.component.css'
})
export class DiagnosticsComponent {
  dateFrom: string = '';
  dateTo: string = '';
  selectedTestType: string = '';

  testTypes = ['MRI', 'CT Scan', 'X-Ray', 'Blood Test', 'ECG', 'Ultrasound'];

  diagnosticsSummary = [
    { title: 'Total Tests', value: 4580 },
    { title: 'Critical Findings', value: 325 },
    { title: 'Average TAT (hrs)', value: 4.2 },
    { title: 'Pending Reports', value: 74 }
  ];

  topDiagnostics = [
    { test: 'MRI Brain', volume: 620, abnormal: 82, tat: '6 hrs' },
    { test: 'CT Chest', volume: 540, abnormal: 65, tat: '4 hrs' },
    { test: 'X-Ray Chest', volume: 900, abnormal: 95, tat: '2 hrs' },
    { test: 'Blood Panel', volume: 1200, abnormal: 210, tat: '3 hrs' },
    { test: 'ECG', volume: 800, abnormal: 50, tat: '1 hr' }
  ];
}
