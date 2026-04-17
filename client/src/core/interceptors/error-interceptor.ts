import { HttpInterceptorFn } from '@angular/common/http';
import { ToastService } from '../services/toast-service';
<<<<<<< HEAD
import { catchError } from 'rxjs';
import { inject } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
=======
import { inject } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { catchError } from 'rxjs';
>>>>>>> basaar/parcial05

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const toast = inject(ToastService);
  const router = inject(Router);

  return next(req).pipe(
    catchError(error => {
      if (error) {
        switch (error.status) {
          case 400:
            if (error.error.errors) {
<<<<<<< HEAD
              const modalStateErrors = [];
              for (const key in error.error.errors) {
                if (error.error.errors[key]) {
                  modalStateErrors.push(error.error.errors[key]);
                }
              }
              throw modalStateErrors.flat();
            } else{
              toast.error(error.error, error.status);
=======
              const modelStateErrors = [];
              for (const key in error.error.errors) {
                if (error.error.errors[key]) {
                  modelStateErrors.push(error.error.errors[key]);
                }
              }
              throw modelStateErrors.flat();
            } else {
              toast.error(error.error);
>>>>>>> basaar/parcial05
            }
            break;
          case 401:
            toast.error("Unauthorized");
            break;
          case 404:
<<<<<<< HEAD
            router.navigateByUrl("/not-found");
=======
            router.navigateByUrl("/not-found")
>>>>>>> basaar/parcial05
            break;
          case 500:
            const navigationExtras: NavigationExtras = { state: { error: error.error } };
            router.navigateByUrl("/server-error", navigationExtras);
            break;
          default:
<<<<<<< HEAD
            toast.error("The unexpected happened!");
=======
            toast.error("The unexpected happened!")
>>>>>>> basaar/parcial05
            break;
        }
      }
      throw error;
    })
  );
};
