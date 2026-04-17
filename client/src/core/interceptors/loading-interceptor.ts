<<<<<<< HEAD
import { HttpEvent, HttpInterceptorFn } from '@angular/common/http';
import { BusyService } from '../services/busy-service';
import { delay, finalize, of, tap } from 'rxjs';
import { inject } from '@angular/core';

const cache = new Map<string, HttpEvent<unknown>>();

//Key value pair

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const busyService = inject(BusyService);

  if(req.method === 'GET') {
    const cachedResponse = cache.get(req.url);
    if(cachedResponse) {
=======
import { HttpEvent, HttpInterceptorFn, HttpParams } from '@angular/common/http';
import { inject } from '@angular/core';
import { BusyService } from '../services/busy-service';
import { delay, finalize, of, tap } from 'rxjs';

const cache = new Map<string, HttpEvent<unknown>>();

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const busyService = inject(BusyService);

  const generateCacheKey = (url: string, params: HttpParams): string => {
    const paramString = params.keys()
      .map(key => `${key}=${params.get(key)}`)
      .join('&');

    return paramString ? `${url}?${paramString}` : url;
  }

  const invalidateCache = (urlPattern: string) => {
    for (const key of cache.keys()) {
      if (key.includes(urlPattern)) {
        cache.delete(key);
        console.log(`Cache invalidated for: ${key}`);
      }
    }
  }

  const cacheKey = generateCacheKey(req.url, req.params);

  if (req.method.includes('POST') && req.url.includes('/likes')) {
    invalidateCache('/likes');
  }

  if (req.method === 'GET') {
    const cachedResponse = cache.get(cacheKey);
    if (cachedResponse) {
>>>>>>> basaar/parcial05
      return of(cachedResponse);
    }
  }

  busyService.busy();

  return next(req).pipe(
<<<<<<< HEAD
    delay(50),
    tap(response => {
      cache.set(req.url, response);
    }),
    finalize(() => {
      busyService.idle();

    })

=======
    delay(2000),
    tap(response => {
      cache.set(cacheKey, response)
    }),
    finalize(() => {
      busyService.idle();
    })
>>>>>>> basaar/parcial05
  );
};
