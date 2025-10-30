import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-integration',
  standalone: true,
  imports: [CommonModule,
    FormsModule],
  templateUrl: './data-integration.component.html',
  styleUrl: './data-integration.component.css'
})
export class DataIntegrationComponent {
  fileType = 'CSV';
  source = '';
  uploadedFile: File | null = null;

  onFileSelect(event: any) {
    this.uploadedFile = event.target.files[0];
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    const file = event.dataTransfer?.files[0];
    if (file) {
      this.uploadedFile = file;
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  validateOnly() {
    alert("✅ File validated successfully (mock)");
  }

  uploadProcess() {
    if (!this.uploadedFile) {
      alert("Please select file!");
      return;
    }

    const formData = new FormData();
    formData.append("file", this.uploadedFile);
    formData.append("fileType", this.fileType);
    formData.append("source", this.source);

    alert(`✅ File Ready to upload: ${this.uploadedFile.name}`);
    // API example:
    // this.http.post('api/upload', formData).subscribe(...)
  }
}
