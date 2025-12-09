import { Component, OnInit, inject, signal } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterOutlet } from '@angular/router';
import { Nav } from "../layout/nav/nav";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    Nav
],
  templateUrl: './app.html',
  styleUrls: ['./app.css']   // ojo: es `styleUrls` en plural
})
// habilita HttpClient en standalone
// en proyectos grandes, normalmente se recomienda la opción 1 (provideHttpClient()
// en main.ts) porque separa responsabilidades
// y evita que el root component cargue dependencias globales.

 export class App {
  protected router = inject(Router);
}
