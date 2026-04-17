<<<<<<< HEAD
import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../types/user';
import { Observable, tap } from 'rxjs';
import { RegisterCreds } from '../../types/registerCreds';
import { environment } from '../../environments/environment';

=======
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { LoginCreds, RegisterCreds, User } from '../../types/user';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { LikesService } from './likes-service';
>>>>>>> basaar/parcial05

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private http = inject(HttpClient);
<<<<<<< HEAD
  currentUser = signal<User | null>(null); // Estado reactivo para el usuario actual
  baseUrl = environment.apiUrl;

  register(creds: RegisterCreds): Observable<User> {
    return this.http.post<User>(this.baseUrl + 'account/register', creds).pipe(  // Observable<User>
      tap(user => {
        if (user) {
          this.setCurrentUser(user);
        }
      })
    );

  }

  login(creds: any): Observable<User> { //creds: LoginCreds
    return this.http.post<User>(this.baseUrl + 'account/login', creds).pipe(  // Observable<User>
=======
  private likesService = inject(LikesService);
  currentUser = signal<User | null>(null);
  baseUrl = environment.apiUrl;

  register(creds: RegisterCreds): Observable<User> {
    return this.http.post<User>(this.baseUrl + "account/register", creds).pipe(
>>>>>>> basaar/parcial05
      tap(user => {
        if (user) {
          this.setCurrentUser(user);
        }
      })
    );
  }

<<<<<<< HEAD
  setCurrentUser(user: User){
    localStorage.setItem("user", JSON.stringify(user));
    this.currentUser.set(user); // Actualizamos el estado actual del usuario
  }

logout(): void {
  localStorage.removeItem("user");
  this.currentUser.set(null);
}
=======
  login(creds: LoginCreds): Observable<User> {
    return this.http.post<User>(this.baseUrl + "account/login", creds).pipe(
      tap(user => {
        if (user) {
          this.setCurrentUser(user);
        }
      })
    );
  }

  setCurrentUser(user: User) {
    localStorage.setItem("user", JSON.stringify(user));
    this.currentUser.set(user);
    this.likesService.getLikeIds();
  }

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("filters");
    this.likesService.clearLikeIds();
    this.currentUser.set(null);
  }
>>>>>>> basaar/parcial05
}
