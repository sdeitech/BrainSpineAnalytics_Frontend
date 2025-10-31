import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-procedure',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './procedure.component.html',
  styleUrl: './procedure.component.css'
})
export class ProcedureComponent {
 procedures = [
  { name: 'Knee Surgery', doctor: 'Dr. Lee', patients: 120, followup: '30%', outcome: '+12%' },
  { name: 'Spine Pain Injection', doctor: 'Dr. Smith', patients: 88, followup: '36%', outcome: '+22%' },
  { name: 'Cataract Laser', doctor: 'Dr. Mehta', patients: 142, followup: '40%', outcome: '+18%' },
  { name: 'Hip Replacement', doctor: 'Dr. Lee', patients: 63, followup: '32%', outcome: '+16%' },
  { name: 'Shoulder Arthroscopy', doctor: 'Dr. Patel', patients: 51, followup: '28%', outcome: '+11%' },
  { name: 'Tennis Elbow Injection', doctor: 'Dr. Roy', patients: 74, followup: '34%', outcome: '+20%' },
  { name: 'ACL Reconstruction', doctor: 'Dr. Lee', patients: 95, followup: '38%', outcome: '+25%' },
  { name: 'Rotator Cuff Repair', doctor: 'Dr. Smith', patients: 47, followup: '29%', outcome: '+13%' },
  { name: 'Back Pain Nerve Block', doctor: 'Dr. Mehta', patients: 130, followup: '34%', outcome: '+19%' },
  { name: 'Shoulder PRP Therapy', doctor: 'Dr. Roy', patients: 55, followup: '31%', outcome: '+15%' },
];

}
