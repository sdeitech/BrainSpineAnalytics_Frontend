import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  public editMode = false;
  public user: any = []
  public role:any=''
  public tempUser = { ...this.user };
  
ngOnInit(): void {
  this.role=localStorage.getItem('userRole');
  const userData = localStorage.getItem('userDetails');
  this.user = userData ? JSON.parse(userData) : null;
  this.avatarText()
}


  avatarText() {
    const nameParts = this.user.firstname.trim().split(" ");
    if (nameParts.length === 1) {
      this.avatarText = nameParts[0].substring(0, 2).toUpperCase();
    } else {
      this.avatarText =(nameParts[0][0] + nameParts[nameParts.length - 1][0]).toUpperCase();
    }
  }

  toggleEdit() {
    this.editMode = !this.editMode;
    this.tempUser = { ...this.user }; // copy data for edit
  }

  saveProfile() {
    this.user = { ...this.tempUser };
    this.editMode = false;
  }

  cancelEdit() {
    this.editMode = false;
    this.tempUser = { ...this.user };
  }
}
