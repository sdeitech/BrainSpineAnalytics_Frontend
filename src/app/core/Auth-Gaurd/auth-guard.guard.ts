import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/Login/login.service';

export const AuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(LoginService);
  const router = inject(Router);

  // Check if the user is logged in (i.e., token exists)
  if (authService.isLoggedIn()) {
    return true; // Allow route access
  } else {
    // Redirect to login if not logged in
    router.navigate(['/login']);
    return false;
  }
};
