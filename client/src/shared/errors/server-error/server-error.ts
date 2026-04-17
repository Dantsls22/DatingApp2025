import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ApiError } from '../../../types/error';

<<<<<<< HEAD

=======
>>>>>>> basaar/parcial05
@Component({
  selector: 'app-server-error',
  imports: [],
  templateUrl: './server-error.html',
  styleUrl: './server-error.css'
})
export class ServerError {
  private router = inject(Router);
  protected error = signal<ApiError | null>(null);
  protected showDetails = false;

  constructor() {
    const navigation = this.router.currentNavigation();
    this.error.set(navigation?.extras?.state?.["error"]);
  }

<<<<<<< HEAD
  detailsToggle(){
    this.showDetails = !this.showDetails;
  }
=======
  detailsToggle() {
    this.showDetails = !this.showDetails;
  }

>>>>>>> basaar/parcial05
}
