import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-providers',
  standalone: true,
  imports: [CommonModule,FormsModule ],
  templateUrl: './providers.component.html',
  styleUrl: './providers.component.css'
})
export class ProvidersComponent {
   providers = ["Dr. John Smith", "Dr. Emily Clark", "Dr. Robert Wilson", "Dr. Olivia Brown"];
  selectedProvider = "";
  selectedPeriod = "month";

  totalProviders = 4;
  avgPatients = 32;
  avgRating = 4.6;
  avgUtilization = 87; // %

  productivityData = [
    { name: "Dr. John Smith", patients: 38, hours: 42, rating: 4.8, utilization: 92 },
    { name: "Dr. Emily Clark", patients: 31, hours: 38, rating: 4.6, utilization: 85 },
    { name: "Dr. Robert Wilson", patients: 29, hours: 40, rating: 4.4, utilization: 80 },
    { name: "Dr. Olivia Brown", patients: 34, hours: 41, rating: 4.7, utilization: 90 }
  ];

  filterData() {
    console.log("Provider:", this.selectedProvider, "Period:", this.selectedPeriod);
  }
}
