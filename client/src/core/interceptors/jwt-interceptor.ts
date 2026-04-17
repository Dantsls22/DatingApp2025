import { HttpInterceptorFn } from '@angular/common/http';
<<<<<<< HEAD
import { inject } from '@angular/core';
import { AccountService } from '../services/account-service';
=======
import { AccountService } from '../services/account-service';
import { inject } from '@angular/core';
>>>>>>> basaar/parcial05

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const accountService = inject(AccountService);
  const user = accountService.currentUser();

<<<<<<< HEAD
  if (user){
=======
  if (user) {
>>>>>>> basaar/parcial05
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${user.token}`
      }
    });
  }

  return next(req);
};
