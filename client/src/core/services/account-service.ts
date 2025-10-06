import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../user';
import { Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private http = inject(HttpClient);
  currentUser = signal<User | null>(null); // Estado reactivo para el usuario actual
  baseUrl = "https://localhost:5001/api/";

  login(creds: any): Observable<User> { //creds: LoginCreds
    return this.http.post<User>(this.baseUrl + 'account/login', creds).pipe(  // Observable<User>
      tap(user => {
        if(user){
          localStorage.setItem("user", JSON.stringify(user));
          this.currentUser.set(user); // Actualizamos el estado actual del usuario
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem("user");
    this.currentUser.set(null);
  }
}
