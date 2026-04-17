<<<<<<< HEAD
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { inject } from '@angular/core'; // Importamos la funcion inject
import { AccountService } from '../../core/services/account-service';
import { Router, RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
=======
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../core/services/account-service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
>>>>>>> basaar/parcial05
import { ToastService } from '../../core/services/toast-service';
import { themes } from '../theme';
import { BusyService } from '../../core/services/busy-service';

<<<<<<< HEAD

=======
>>>>>>> basaar/parcial05
@Component({
  selector: 'app-nav',
  imports: [FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
<<<<<<< HEAD

export class Nav implements OnInit {

  private router = inject(Router);
  protected accountService = inject(AccountService);
  protected BusyService = inject(BusyService);
  private toast = inject(ToastService);
=======
export class Nav implements OnInit {
  private router = inject(Router);
  private toast = inject(ToastService);
  protected accountService = inject(AccountService);
  protected busyService = inject(BusyService);
>>>>>>> basaar/parcial05
  protected creds: any = {};
  protected selectedTheme = signal<string>(localStorage.getItem("theme") || "light");
  protected themes = themes;

  ngOnInit(): void {
    document.documentElement.setAttribute("data-theme", this.selectedTheme());
  }

  handleSelectedTheme(theme: string) {
    this.selectedTheme.set(theme);
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
<<<<<<< HEAD
    const elem = document.activeElement as HTMLElement;
=======
    const elem = document.activeElement as HTMLDivElement;
>>>>>>> basaar/parcial05
    if (elem) {
      elem.blur();
    }
  }

  login(): void {
    this.accountService.login(this.creds).subscribe({
      next: response => {
        this.router.navigateByUrl("/members");
        this.creds = {};
<<<<<<< HEAD
        this.toast.success("Logged in!");
=======
        this.toast.success("Logged in!")
>>>>>>> basaar/parcial05
      },
      error: error => {
        this.toast.error(error.error);
      }
    });
  }

  logout(): void {
    this.accountService.logout();
    this.router.navigateByUrl("/");
  }
}
