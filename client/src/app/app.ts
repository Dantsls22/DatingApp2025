import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { Nav } from "../layout/nav/nav";
import { AccountService } from '../core/services/account-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule
    // habilita HttpClient en standalone
    // en proyectos grandes, normalmente se recomienda la opción 1 (provideHttpClient()
    // en main.ts) porque separa responsabilidades
    // y evita que el root component cargue dependencias globales.
    ,
    Nav
],
  templateUrl: './app.html',
  styleUrls: ['./app.css']   // ojo: es `styleUrls` en plural
})
export class App implements OnInit {
  private accountService = inject(AccountService);
  private http = inject(HttpClient);

  title = signal('Dating App');
  members = signal<any>([]);   // puedes tiparlo con una interfaz si lo deseas

  async ngOnInit(): Promise<void> {
    this.setcurrentUser();
    this.members.set(await this.getMembers());
  }

  setcurrentUser(): void {
    const userString = localStorage.getItem("user");
    if(!userString) return;
      const user = JSON.parse(userString!);
      this.accountService.currentUser.set(user); // Actualizamos el estado actual del usuario
  }

  async getMembers(): Promise<Object> {
    try {
      return lastValueFrom(this.http.get('https://localhost:5001/api/members'))
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
