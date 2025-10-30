import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-referres',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './referres.component.html',
  styleUrl: './referres.component.css'
})
export class ReferresComponent {
   referralSummary = {
    totalReferrals: 120,
    approved: 85,
    pending: 28,
    rejected: 7
  };

  referralsList = [
    { name: 'Amit Sharma', referredBy: 'Rohit Patel', role: 'Frontend Dev', status: 'Pending', date: '2025-01-10' },
    { name: 'Neha Singh', referredBy: 'Priya Gupta', role: 'Backend Dev', status: 'Approved', date: '2025-01-08' },
    { name: 'Karan Mehta', referredBy: 'Vikas Kumar', role: 'UI/UX Designer', status: 'Rejected', date: '2025-01-05' }
  ];

  recentActivities = [
    { icon: 'bi bi-check-circle-fill text-success', msg: 'Neha Singh referral approved' },
    { icon: 'bi bi-hourglass-split text-warning', msg: 'Amit Sharma referral pending review' },
    { icon: 'bi bi-x-circle-fill text-danger', msg: 'Karan Mehta referral rejected' }
  ];

  approve(item: any) {
    item.status = 'Approved';
  }

  reject(item: any) {
    item.status = 'Rejected';
  }
}
