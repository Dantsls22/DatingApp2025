import { inject, Injectable } from '@angular/core';
import { AccountService } from './account-service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InitService {
  private accountService = inject(AccountService);

  init(): Observable<null> {
    // Lógica de inicialización aquí
    const userString = localStorage.getItem("user");
    // if (!userString) return of(null);
    // const user = JSON.parse(userString!);
    // this.accountService.currentUser.set(user); // Actualizamos el estado actual del usuario

    // return of(null); // Retornamos  un observable para cumplir con la firma

    if (userString){
      const user = JSON.parse(userString);
      this.accountService.currentUser.set(user); // Actualizamos el estado actual del usuario
    }
    return of(null); // Retornamos  un observable para cumplir con la firma
  }
}
