import { ApplicationConfig, Provider, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HttpClient } from '@angular/common/http';
import { SANITY_CONFIG } from './service/sanity.tokens';

const sanityRuntimeProvider: Provider = {
  provide: SANITY_CONFIG,
  useFactory: () => {
    try {
      return (window as any).__sanity ?? null;
    } catch {
      return null;
    }
  }
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
    BrowserAnimationsModule,
    HttpClient,
    sanityRuntimeProvider
  ]
};
