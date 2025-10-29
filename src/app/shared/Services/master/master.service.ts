import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.prod';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
 private baseUrl = environment.api_url; // 🔹 Replace with your backend API URL
 private loggedIn$ = new BehaviorSubject<boolean>(this.hasToken());
 
 private hasToken(): boolean {
    return !!localStorage.getItem('authToken');
  }

  private handleError(error: HttpErrorResponse) {
      let errorMessage = 'Something went wrong!';
      if (error.error instanceof ErrorEvent) {
        errorMessage = `Client Error: ${error.error.message}`;
      } else {
        errorMessage = `Server Error: ${error.status} - ${error.message}`;
      }
      return throwError(() => new Error(errorMessage));
    }
  
  getMasterData(data:any): Observable<any> {
      return this.http.post(`${this.baseUrl}/API/Master/masterData`, data).pipe(
        catchError(this.handleError)
      );
  }

  constructor(private http: HttpClient) { }
}
