import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-revenue-analytics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './revenue-analytics.component.html',
  styleUrl: './revenue-analytics.component.css'
})
export class RevenueAnalyticsComponent {
  revenueSummary = {
    totalRevenue: 4520000,
    monthlyGrowth: "12.4%",
    topDepartment: "Cardiology",
    highestMonth: "September"
  };

  monthlyData = [
    { month: 'July', revenue: 820000, op: 320000, ip: 500000 },
    { month: 'August', revenue: 910000, op: 350000, ip: 560000 },
    { month: 'September', revenue: 1120000, op: 410000, ip: 710000 },
    { month: 'October', revenue: 980000, op: 390000, ip: 590000 },
  ];

  departmentRevenue = [
    { dept: 'Cardiology', revenue: 1250000, growth: "+14%" },
    { dept: 'Neurology', revenue: 890000, growth: "+9%" },
    { dept: 'Orthopedics', revenue: 750000, growth: "+7%" },
    { dept: 'Pediatrics', revenue: 530000, growth: "+5%" }
  ];

  alerts = [
    { icon: 'bi bi-cash-coin text-success', msg: "Quarterly revenue target achieved" },
    { icon: 'bi bi-arrow-up-right text-primary', msg: "OPD revenue increased by 8%" },
    { icon: 'bi bi-exclamation-circle text-warning', msg: "IPD growth slowed by 2%" }
  ];
} 
