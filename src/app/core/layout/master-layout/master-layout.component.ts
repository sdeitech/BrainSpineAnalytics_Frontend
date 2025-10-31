import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet, RouterLinkActive, RouterLink } from '@angular/router';
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
  public Role:any=''
  public userName:any=''
  public avatarText:any=''
  public userMenuOpen = false;
  public isSubMenuOpen = true;
  public isCollapsed = false;
  public selectedTab: string = 'operational';
  public username = localStorage.getItem('username') || 'User';
  public pageTitle = '';
  public menuOpen = false;
  public menu:any=[]
  public darkTheme = false;
  public sidebarCollapsed = false;

  constructor(private router: Router,
    private loginService:LoginService
  ) {}

  async ngOnInit() {
    // Restore last theme (if saved)
    this.Role = await this.loginService.getUserRole();
    this.userName=localStorage.getItem('username')
    const nameParts = this.userName.trim().split(" ");
    if (nameParts.length === 1) {
      this.avatarText = nameParts[0].substring(0, 2).toUpperCase();
    } else {
      this.avatarText =
        (nameParts[0][0] + nameParts[nameParts.length - 1][0]).toUpperCase();
    }
    this.darkTheme = localStorage.getItem('theme') === 'dark';
    document.body.classList.toggle('dark-theme', this.darkTheme);
    await this.getNavbarData();
    await this.selectTab(this.selectedTab)
  }

    async getNavbarData() {
     await  this.loginService.getNavbardetails().subscribe((navdata: any) => {
     if(navdata && navdata.length>0){
        const iconMap: any = {
          'Main': 'fa fa-home',
          'Performance': 'fa fa-line-chart',
          'Clinical Operations': 'fa fa-hospital-o',
          'Admin': 'fa fa-cog'
        };

        const grouped: any = {};

        navdata.forEach((item: any) => {
          if (!grouped[item.headerName]) {
            grouped[item.headerName] = {
              title: item.headerName,
              icon: iconMap[item.headerName] || 'fa fa-folder',
              open: true,
              toggle: true,
              items: []
            };
          }

          grouped[item.headerName].items.push({
            label: item.subHeaderName,
            link: item.routeUrl,
            icon: item.icon || 'fa fa-circle' // default icon
          });
        });

        // sort items by displayOrder
        Object.values(grouped).forEach((section: any) => {
          section.items.sort((a: any, b: any) => {
            const aObj = navdata.find((d: any) => d.subHeaderName === a.label);
            const bObj = navdata.find((d: any) => d.subHeaderName === b.label);
            return (aObj?.displayOrder ?? 0) - (bObj?.displayOrder ?? 0);
          });
        });

        this.menu = Object.values(grouped);
     
      }
  });
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

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
  onMenuHover(menu: any) {
  if (this.isCollapsed) {
    menu.open = true;
  }
}

onMenuLeave(menu: any) {
  if (this.isCollapsed) {
    menu.open = false;
    
  }
}
onMenuClick(menu: any) {
  if (this.isCollapsed) {
    menu.open = !menu.open; // flyout open karega
  } else {
    this.toggleMenu(menu); // normal open/close
  }
}

toggleMenu(m:any){
  m.open = !m.open;
}

toggleUserMenu() {
  this.userMenuOpen = !this.userMenuOpen;
}

  async selectTab(tab: string) {
  this.selectedTab = tab;
  if (tab == "research") {
  this.menu = [
    {
      title: 'MAIN',
      icon: 'fa fa-home',
      open: true,
      toggle: false,
      items: [
        { label: 'Main Dashboard', link: '/dashboard', icon: 'fa fa-chart-line' }
      ]
    },
    {
      title: 'Cohorts',
      icon: 'fa fa-users',
      toggle: false,
      open: true,
      items: [
        { label: 'Cohorts', link: '/cohorts', icon: 'fa fa-user-friends' },
      ]
    },
    {
      title: 'Procedure',
      icon: 'fa fa-stethoscope',
      toggle: false,
      open: true,
      items: [
        { label: 'Procedure', link: '/procedure', icon: 'fa fa-file-medical' },
      ]
    },
    {
      title: 'Outcome',
      icon: 'fa fa-notes-medical',
      toggle: false,
      open: true,
      items: [
        { label: 'Outcome', link: '/outcome', icon: 'fa fa-poll' },
      ]
    },
  ];
} 
else {
    await this.getNavbarData();
}

}
 
}
