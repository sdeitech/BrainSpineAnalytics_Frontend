import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginData } from '../Model/LoginData';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../core/services/Login/login.service';
import{DashboardComponent} from '../dashboard/dashboard.component'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule,DashboardComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public loginData = new LoginData();
  public isLoading = false;
  public isValidUser = false;
  public isLogin = true;
  public errorMessage = '';

  constructor(
    private toastr: ToastrService,
    private loginService:LoginService,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  onLogin(): void {
    // Simple validation
    if (!this.loginData.email) {
      this.toastr.error('Please fill User Name');
      return;
    }
    else if (!this.loginData.password) {
      this.toastr.error('Please fill Password');
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    // After API call
    this.loginService.login(this.loginData).subscribe({next: res => {
        this.toastr.success('Login successful!');
        this.isValidUser=true;
      },
      error: err => {
        this.toastr.error(err.message);
      }
    });
    // this code after verification of user
    if (!this.isValidUser) {
      setTimeout(() => {
        this.isLoading = false;
        // Navigate to dashboard
        this.router.navigate(['/dashboard']);
        //this.router.navigate(['/PowerBIdashboard']); 

        // dashboard
      }, 1500);
    } else {
      this.isLoading = false
      this.toastr.error('Invalid username or password.');
    }

  }

  navigateByRole(role: string) {
    switch (role) {
      case 'admin':
        this.router.navigate(['/admin/dashboard']);
        break;
      case 'manager':
        this.router.navigate(['/manager/dashboard']);
        break;
      case 'user':
        this.router.navigate(['/user/dashboard']);
        break;
      case 'guest':
        this.router.navigate(['/guest/home']);
        break;
      default:
        this.router.navigate(['/home']);
    }
  }

  onSignup() {
    this.isLogin = false;
    this.loginData = new LoginData()
  }

  onLogIn() {
    this.isLogin = true;
    this.loginData = new LoginData()
  }

  async SignUp() {
    let errorCount = await this.validateSignUpForm()
    if (errorCount == 0) {
      //api call to save
       this.loginService.signup(this.loginData).subscribe(res=>{
        this.toastr.success("Data has been recorded successfully.")
          setTimeout(() => {
            this.onLogIn()
          }, 2800)
       })
    }
  }

  validateSignUpForm() {
    let errorCount = 0;
    if (!this.loginData.firstname) {
      errorCount++
      this.toastr.error("Enter First Name")
    }
    else if (!this.loginData.lastName) {
      errorCount++
      this.toastr.error("Enter Last Name")
    }
    else if (!this.loginData.email) {
      errorCount++
      this.toastr.error("Enter Email")
    }
    else if (!this.loginData.password) {
      errorCount++
      this.toastr.error("Enter Password")
    }
    else if (!this.loginData.confirmpassword) {
      errorCount++
      this.toastr.error("Confirm your password")
    }
    if (errorCount == 0 && !this.loginData.email.includes('@')) {
      errorCount++
      this.toastr.warning("Enter valid Email")
    }
    if (errorCount == 0 && this.loginData.password != this.loginData.confirmpassword) {
      errorCount++
      this.toastr.warning("Password and Confirm Password must be the same")
    }
    return errorCount
  }

}
