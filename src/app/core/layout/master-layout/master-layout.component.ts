import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet, RouterLinkActive, RouterLink } from '@angular/router';
import { LoginService } from '../../services/Login/login.service';
@Component({
  selector: 'app-master-layout',
  standalone: true,
  imports: [CommonModule,
    RouterLink,        
    RouterLinkActive, 
    RouterOutlet  ],
  templateUrl: './master-layout.component.html',
  styleUrls: ['./master-layout.component.css']
})
export class MasterLayoutComponent implements OnInit {
  isCollapsed = false;
  username = localStorage.getItem('username') || 'User';
  pageTitle = '';
  menuOpen = false;
  darkTheme = false;
  sidebarCollapsed = false;
  constructor(private router: Router,
    private loginService:LoginService
  ) {}

  ngOnInit() {
    // Restore last theme (if saved)
    this.darkTheme = localStorage.getItem('theme') === 'dark';
    document.body.classList.toggle('dark-theme', this.darkTheme);
  }
  isActive(url: string) {
    return this.router.url === url;
  }
  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  toggleTheme() {
    this.darkTheme = !this.darkTheme;
    document.body.classList.toggle('dark-theme', this.darkTheme);
    localStorage.setItem('theme', this.darkTheme ? 'dark' : 'light');
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

   toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

 
}
