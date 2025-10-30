import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-telehealth',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './telehealth.component.html',
  styleUrl: './telehealth.component.css'
})
export class TelehealthComponent {
  dateFrom = '';
  dateTo = '';
  selectedMode = '';

  telehealthModes = ['Video Call', 'Phone Call', 'Chat', 'Remote Monitoring'];

  summary = [
    { title: "Total Consultations", value: 1450 },
    { title: "Avg Waiting Time (min)", value: 6 },
    { title: "Resolved Cases", value: 1320 },
    { title: "Follow-ups Scheduled", value: 280 }
  ];

  providers = [
    { name: 'Dr. John Carter', sessions: 340, rating: 4.8, followups: 60 },
    { name: 'Dr. Aditi Sharma', sessions: 290, rating: 4.6, followups: 54 },
    { name: 'Dr. Mark Hazel', sessions: 250, rating: 4.5, followups: 40 },
    { name: 'Dr. Emily Rose', sessions: 210, rating: 4.7, followups: 45 },
  ];
}
