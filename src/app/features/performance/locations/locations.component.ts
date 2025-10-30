import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.css'
})
export class LocationsComponent {
  locations = ["New York", "Los Angeles", "Chicago", "Houston", "Miami", "San Francisco", "Dallas"];

  selectedLocation = "";
  selectedPeriod = "month";

  // Stats
  activeCount = 7;
  avgPatients = 210; // avg per day
  avgRevenue = 580000; // avg per location

  // Performance chart bars data
  performance = [
    { name: "New York", value: 92 },
    { name: "Los Angeles", value: 85 },
    { name: "Chicago", value: 78 },
    { name: "Houston", value: 70 },
    { name: "San Francisco", value: 65 },
    { name: "Miami", value: 58 },
    { name: "Dallas", value: 55 }
  ];

  filterData() {
    console.log("Filtering for:", this.selectedLocation, this.selectedPeriod);
  }
}
