import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
<<<<<<< HEAD
=======

>>>>>>> basaar/parcial05
  constructor() {
    this.createToastContainer();
  }

<<<<<<< HEAD
  private createToastContainer() {
=======
  private createToastContainer(): void {
>>>>>>> basaar/parcial05
    if (!document.getElementById("toast-container")) {
      const container = document.createElement("div");
      container.id = "toast-container";
      container.className = "toast toast-bottom toast-end";
      document.body.appendChild(container);
    }
  }

  private createToastElement(message: string, alertClass: string, duration = 5000) {
    const toastContainer = document.getElementById("toast-container");
    if (!toastContainer) return;

    const toast = document.createElement("div");
    toast.classList.add("alert", alertClass, "shadow-lg");
    toast.innerHTML = `
<<<<<<< HEAD
        <span>${message}</span>
        <button class="ml-4 btn btn-sm btn-ghost">X</button>
=======
      <span>${message}</span>
      <button class="ml-4 btn btn-sm btn-ghost">x</button>
>>>>>>> basaar/parcial05
    `;
    toast.querySelector("button")?.addEventListener("click", () => {
      toastContainer.removeChild(toast);
    });
    toastContainer.append(toast);

    setTimeout(() => {
<<<<<<< HEAD
      if (toastContainer.contains(toast)) {
=======
      if (toastContainer.contains((toast))) {
>>>>>>> basaar/parcial05
        toastContainer.removeChild(toast);
      }
    }, duration);
  }

<<<<<<< HEAD
  success(message: string, duration?: number) {
    this.createToastElement(message, "alert-success", duration);
  }

  error(message: string, duration?: number) {
    this.createToastElement(message, "alert-error", duration);
  }

  info(message: string, duration?: number) {
    this.createToastElement(message, "alert-info", duration);
  }

  warning(message: string, duration?: number) {
    this.createToastElement(message, "alert-warning", duration);
  }

=======
  success(message: string, duration?: number): void {
    this.createToastElement(message, "alert-success", duration);
  }

  error(message: string, duration?: number): void {
    this.createToastElement(message, "alert-error", duration);
  }

  warning(message: string, duration?: number): void {
    this.createToastElement(message, "alert-warning", duration);
  }

  info(message: string, duration?: number): void {
    this.createToastElement(message, "alert-info", duration);
  }
>>>>>>> basaar/parcial05
}
