<<<<<<< HEAD
import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { ToastService } from '../services/toast-service';
import { AccountService } from '../services/account-service';
=======
import { CanActivateFn } from '@angular/router';
import { AccountService } from '../services/account-service';
import { inject } from '@angular/core';
import { ToastService } from '../services/toast-service';
>>>>>>> basaar/parcial05

export const authGuard: CanActivateFn = () => {
  const accountService = inject(AccountService);
  const toast = inject(ToastService);

<<<<<<< HEAD
  if(accountService.currentUser()){ // Si el usuario está autenticado
    return true;
  } else {
    toast.error("You shall not pass!");
    return false;
  }

=======
  if (accountService.currentUser()) {
    return true;
  } else {
    toast.error("You shall not pass!")
    return false;
  }
>>>>>>> basaar/parcial05
};
