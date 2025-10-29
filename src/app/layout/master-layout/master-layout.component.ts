import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-master-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './master-layout.component.html',
  styleUrls: ['./master-layout.component.css']
})
export class MasterLayoutComponent implements OnInit {
  isCollapsed = false;
  username = localStorage.getItem('username') || 'User';
  pageTitle = '';

  constructor(private router: Router) {}

  ngOnInit() {
    // Update title dynamically based on route
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event?.urlAfterRedirects || ''; 
        const current = url.split('/').pop() || ''; 
        this.pageTitle = this.getPageTitle(current);
        document.title = this.pageTitle + ' | MyApp';
      }
    });
  }

  getPageTitle(route: string): string {
    switch (route) {
      case 'dashboard': return 'Dashboard';
      case 'patients': return 'Patients';
      case 'appointments': return 'Appointments';
      case 'reports': return 'Reports';
      default: return 'Home';
    }
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  logout() {
    localStorage.clear();
    window.location.href = '/login';
  }
}
