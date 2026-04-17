import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
<<<<<<< HEAD

export class BusyService {
  busyRequestCount = signal(0);

  busy(){
    this.busyRequestCount.update(current => current + 1);
  }

  idle(){
    this.busyRequestCount.update(current => Math.max(0, current - 1));
  }


=======
export class BusyService {
  busyRequestCount = signal(0);

  busy() {
    this.busyRequestCount.update(current => current + 1);
  }

  idle() {
    this.busyRequestCount.update(current => Math.max(0, current - 1));
  }
>>>>>>> basaar/parcial05
}
