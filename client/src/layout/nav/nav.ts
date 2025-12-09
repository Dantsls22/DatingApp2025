import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { inject } from '@angular/core'; // Importamos la funcion inject
import { AccountService } from '../../core/services/account-service';
import { Router, RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { ToastService } from '../../core/services/toast-service';
@Component({
  selector: 'app-nav',
  imports: [FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})

export class Nav {
  protected accountService = inject(AccountService);
  private toast = inject(ToastService);
  protected creds: any = {};
  private router = inject(Router);

  login(): void {
    this.accountService.login(this.creds).subscribe({
      next: response => {
        this.router.navigateByUrl("/members");
        this.creds = {};
        this.toast.success("Logged in!");
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
