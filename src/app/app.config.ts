import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom, inject } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { routes } from './app.routes';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
// import { AuthInterceptor } from './Services/Interceptor/auth.interceptor'; 
// import { LoginService } from './Services/Login/login.service'; 

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
    importProvidersFrom(
      HttpClientModule,
      ToastrModule.forRoot({
        timeOut: 3000,
        positionClass: 'toast-top-right',
        preventDuplicates: true,
      })
    ),

    provideHttpClient(
      withInterceptors([
        (req, next) => {
          const token = localStorage.getItem('jwtToken');
          if (token) {
            const cloned = req.clone({
              setHeaders: { Authorization: `Bearer ${token}` }
            });
            return next(cloned);
          }
          return next(req);
        }
      ])
    ),
  ],
};
