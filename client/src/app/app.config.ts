import { ApplicationConfig, importProvidersFrom, inject, provideAppInitializer, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { routes } from './app.routes'; //esto depende de si el archivo existe
import { InitService } from '../core/services/init-service';
import { last, lastValueFrom } from 'rxjs';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes, withViewTransitions()),
    importProvidersFrom(HttpClientModule), //  agregado
    provideAppInitializer(async () => {
      // Aquí puedes agregar lógica de inicialización si es necesario

      const initService = inject(InitService);

      return new Promise<void>((resolve) => {
        setTimeout(async () => {
          try {
            return lastValueFrom(initService.init())
          } finally {
            const splash = document.getElementById("initial-splash");
            if (splash) {
              splash.remove();
            }
            resolve();
          }
        }, 500); // Simula un retardo de 500 ms
      });
    })
  ]
};
