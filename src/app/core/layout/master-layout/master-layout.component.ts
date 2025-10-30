import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet, RouterLinkActive, RouterLink } from '@angular/router';
import { LoginService } from '../../services/Login/login.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-master-layout',
  standalone: true,
  imports: [CommonModule,FormsModule,
    RouterLink,        
    RouterLinkActive, 
    RouterOutlet  ],
  templateUrl: './master-layout.component.html',
  styleUrls: ['./master-layout.component.css']
})
export class MasterLayoutComponent implements OnInit {
  Role:any=''
  isCollapsed = false;
  selectedTab: string = 'operational';
  username = localStorage.getItem('username') || 'User';
  pageTitle = '';
  menuOpen = false;
  darkTheme = false;
  sidebarCollapsed = false;
  constructor(private router: Router,
    private loginService:LoginService
  ) {}

  async ngOnInit() {
    // Restore last theme (if saved)
    this.Role = await this.loginService.getUserRole();
    this.darkTheme = localStorage.getItem('theme') === 'dark';
    document.body.classList.toggle('dark-theme', this.darkTheme);
  }

    

 menu = [
    {
      title: 'MAIN',
      open: true,
      toggle: true,
      items: [
        { label: 'Dashboard', link: '/dashboard' }   // Dashboard kept inside menu only
      ]
    },
    {
      title: 'PERFORMANCE',
      toggle: true,
      open: true,
      items: [
        { label: 'Revenue Analytics', link: '/revenueAnalytics' },
        { label: 'Appointments', link: '/appointments' },
        { label: 'Locations', link: '/locations' }
      ]
    },
    {
      title: 'CLINICAL OPERATIONS',
      toggle: true,
      open: true,
      items: [
        { label: 'Providers', link: '/providers' },
        { label: 'TBI Insights', link: '/tbiInsights' },
        { label: 'Diagnostics', link: '/diagnostics' },
        { label: 'Telehealth', link: '/telehealth' }
      ]
    },
    {
      title: 'ADMIN',
      toggle: true,
      open: true,
      items: [
        { label: 'Staffing', link: '/staffing' },
        { label: 'Referrals', link: '/referres' },
        { label: 'Data Integration', link: '/dataIntergration' }
      ]
    },
    {
      title: 'Referrers',
      toggle: true,
      open: true,
      items: [
        { label: 'Referrals', link: '/referres' },
      ]
    }
  ];

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
    //this.isCollapsed = !this.isCollapsed;
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
  


toggleMenu(m:any){
  m.open = !m.open;
}

selectTab(tab: string) {
  this.selectedTab = tab;
}
 
}
