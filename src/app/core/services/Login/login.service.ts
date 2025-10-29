import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root' 
})
export class LoginService {

  private baseUrl = environment.api_url; // 🔹 Replace with your backend API URL
  private loggedIn$ = new BehaviorSubject<boolean>(this.hasToken());
  
  constructor(private http: HttpClient) { }

  // 🔹 User Login
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/API/Auth/login`, credentials).pipe(
      map((res: any) => {
        if (res && res.token) {
          localStorage.setItem('authToken', res.token);
        }
        return res;
      }),
      catchError(this.handleError)
    );
  }

  // 🔹 User Registration
  signup(data:any): Observable<any> {
    return this.http.post(`${this.baseUrl}/API/Auth/register`, data).pipe(
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
