import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tbi-insights',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './tbi-insights.component.html',
  styleUrl: './tbi-insights.component.css'
})
export class TBIInsightsComponent {
  providers = ['Dr. Smith', 'Dr. John', 'Dr. Miller'];
  selectedProvider = '';
  startDate = '';
  endDate = '';

  tbiData = [
    { id: 'PT101', age: 34, severity: 'Severe', provider: 'Dr. Smith', date: '2025-01-02' },
    { id: 'PT102', age: 29, severity: 'Moderate', provider: 'Dr. John', date: '2025-01-05' },
    { id: 'PT103', age: 45, severity: 'Mild', provider: 'Dr. Miller', date: '2025-01-07' },
  ];
}
