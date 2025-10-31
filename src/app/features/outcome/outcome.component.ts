import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-outcome',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './outcome.component.html',
  styleUrl: './outcome.component.css'
})
export class OutcomeComponent {
    
  metrics = [
    { title: 'Avg Outcome Score', value: '7.9 / 10', change: '+5%' },
    { title: 'Avg Improvement %', value: '14.2%', change: '+3%' },
    { title: 'Follow-up Compliance', value: '62%', change: '+6%' },
    { title: 'Avg Recovery Days', value: '18 Days', change: '-8%' },
  ];

  trendData = [
    { label: 'Jan', score: 6.8 },
    { label: 'Feb', score: 7.0 },
    { label: 'Mar', score: 7.4 },
    { label: 'Apr', score: 7.9 },
    { label: 'May', score: 8.2 },
    { label: 'Jun', score: 8.0 }
  ];

  outcomes = [
    { procedure: 'Knee Surgery', patients: 120, outcome: '8.1', change: '+12%', recovery: '21 days' },
    { procedure: 'Spine Injection', patients: 90, outcome: '7.5', change: '+18%', recovery: '9 days' },
    { procedure: 'Cataract Laser', patients: 142, outcome: '8.6', change: '+15%', recovery: '7 days' },
    { procedure: 'Hip Replacement', patients: 63, outcome: '7.2', change: '+11%', recovery: '31 days' },
  ];
}
