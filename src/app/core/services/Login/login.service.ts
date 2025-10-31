import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment.prod';
import { jwtDecode } from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root' 
})
export class LoginService {

  private baseUrl = environment.api_url; // 🔹 Replace with your backend API URL
  private loggedIn$ = new BehaviorSubject<boolean>(this.hasToken());
  
  constructor(private toastr: ToastrService,private http: HttpClient) { }

  // 🔹 User Login
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/API/Auth/login`, credentials).pipe(
      map((res: any) => {
        if (res && res.token) {
            const decoded: any = jwtDecode(res.token);
            localStorage.setItem('authToken', res.token);
            localStorage.setItem('username', decoded.firstName);
            let userDetails:any={}
            userDetails.email=decoded.email
            userDetails.firstname=decoded.firstName
            userDetails.lastname=decoded.lastName
            localStorage.setItem('userDetails', JSON.stringify(userDetails));

            let userRole = decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
            if(!userRole || userRole=='Administrator'){
             userRole='Admin'
            }
          localStorage.setItem('userRole', userRole);
        }
        return res;
      }),
      catchError((error) => {
      // 🛑 Unauthorized
      if (error.status === 401) {
        this.toastr.error("Invalid username or password", "Unauthorized");
      }
      // 🚫 Forbidden
      else if (error.status === 403) {
        this.toastr.warning("You don't have permission to access this resource", "Access Denied");
      }
      // 🌐 Network / Server error
      else if (error.status === 0) {
        this.toastr.error("Unable to reach server. Please check your internet connection.", "Network Error");
      }
      else {
        this.toastr.error("Something went wrong! Please try again later.", "Error");
      }

      // Always rethrow error if needed by subscribers
      return throwError(() => error);
    })
  );
  }

  // 🔹 User Registration
  signup(data:any): Observable<any> {
    return this.http.post(`${this.baseUrl}/API/Auth/register`, data).pipe(
      catchError(this.handleError)
    );
  }

  getNavbardetails(): Observable<any> {
    return this.http.get(`${this.baseUrl}/API/Menu/NavBar`).pipe(
      catchError(this.handleError)
    );
  }
  // 🔹 Get Logged-in User Info
  getUserProfile(): Observable<any> {
    return this.http.get(`${this.baseUrl}/API/Auth/user/profile`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('authToken')}`
      }
    }).pipe(
      catchError(this.handleError)
    );
  }

  // 🔹 Logout
  logout(): void {
    localStorage.removeItem('authToken');
  }

  // 🔹 Check if user is logged in
  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken');
  }
  
  // 🔹 retrun user role 
  getUserRole(){
    return localStorage.getItem('userRole');
  }
  /** 🔹 Observable login status (for navbar, etc.) */
  getLoginStatus(): Observable<boolean> {
    return this.loggedIn$.asObservable();
  }

  /** 🔹 Check if token exists initially */
  private hasToken(): boolean {
    return !!localStorage.getItem('authToken');
  }
   // 🔹 Retrieve stored token (used by AuthInterceptor)
  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }
  
  // 🔹 Handle Errors
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Something went wrong!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Client Error: ${error.error.message}`;
    } else {
      errorMessage = `Server Error: ${error.status} - ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }
}
