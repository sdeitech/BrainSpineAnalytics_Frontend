import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginData, SignUpData } from '../Model/LoginData';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../core/services/Login/login.service';
import{DashboardComponent} from '../dashboards/admin-dashboard/dashboard.component'
import { MasterService } from '../../shared/Services/master/master.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule,DashboardComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
 

  public loginData = new LoginData();
  public signUpData = new SignUpData();
  public roles: any[] = [
    { id: 1, name: 'Doctor' },
    { id: 2, name: 'Admin' },
    { id: 3, name: 'Patient' }
  ];;
  public isLoading = false;
  public isValidUser = false;
  public isLogin = true;
  public errorMessage = '';
 

  showPassword = false;
  showConfirmPassword = false;
  constructor(
    private toastr: ToastrService,
    private masterService:MasterService,
    private loginService:LoginService,
    private router: Router) {
  }

  async ngOnInit(): Promise<void> {
   localStorage.clear();
   await this.getRoleMaster()
  }

  getRoleMaster(){
    let obj:any={}
    obj.Action="GetRoleMaster"
    this.masterService.getMasterData(obj).subscribe(res=>{
      if(res){
         this.roles=res;
      }
    })
  }
  async onLogin(): Promise<void> {
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
    await this.loginService.login(this.loginData).subscribe({next: res => {
        this.toastr.success('Login successful!');
        this.isValidUser=true;
        if (this.isValidUser) {
            setTimeout(() => {
              this.isLoading = false;
              // Navigate to dashboard
              this.router.navigate(['/dashboard']);
            }, 1500);
          } else {
            this.isLoading = false
            this.toastr.error('Invalid username or password.');
          }
      },
      error: err => {
        this.isLoading = false;
        console.error(err.message);
      }
      
    });
  
  }

  // navigateByRole(role: string) {
  //   switch (role) {
  //     case 'admin':
  //       this.router.navigate(['/admin/dashboard']);
  //       break;
  //     case 'manager':
  //       this.router.navigate(['/manager/dashboard']);
  //       break;
  //     case 'user':
  //       this.router.navigate(['/user/dashboard']);
  //       break;
  //     case 'guest':
  //       this.router.navigate(['/guest/home']);
  //       break;
  //     default:
  //       this.router.navigate(['/home']);
  //   }
  // }

  onSignup() {
    this.isLogin = false;
    this.loginData = new LoginData();
    this.signUpData = new SignUpData();
  }

  onLogIn() {
    this.isLogin = true;
    this.loginData = new LoginData();
    this.signUpData = new SignUpData();
  }

  async SignUp() {
    let errorCount = await this.validateSignUpForm()
    if (errorCount == 0) {
      //api call to save
       await this.loginService.signup(this.signUpData).subscribe(res=>{
        this.toastr.success("Data has been recorded successfully.")
          setTimeout(() => {
            this.onLogIn()
          }, 2800)
       })
    }
  }

  validateSignUpForm() {
  let errorCount = 0;

  // Basic field checks
  if (!this.signUpData.firstname) {
    errorCount++;
    this.toastr.error("Enter First Name");
  } 
  else if (!this.signUpData.lastName) {
    errorCount++;
    this.toastr.error("Enter Last Name");
  } 
  else if (!this.signUpData.email) {
    errorCount++;
    this.toastr.error("Enter Email");
  } 
  else if (!this.signUpData.role) {
    errorCount++;
    this.toastr.error("Select your Role");
  } 
  else if (!this.signUpData.password) {
    errorCount++;
    this.toastr.error("Enter Password");
  } 
  else if (!this.signUpData.confirmpassword) {
    errorCount++;
    this.toastr.error("Confirm your Password");
  }

  // Email validation
  if (errorCount === 0 && !this.signUpData.email.includes('@')) {
    errorCount++;
    this.toastr.warning("Enter a valid Email");
  }

  // ✅ Password strength check
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (errorCount === 0 && !passwordPattern.test(this.signUpData.password)) {
    errorCount++;
    this.toastr.warning(
      "Password must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character"
    );
  }

  // Confirm password match
  if (errorCount === 0 && this.signUpData.password !== this.signUpData.confirmpassword) {
    errorCount++;
    this.toastr.warning("Password and Confirm Password must match");
  }

  return errorCount;
}


}
