import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding, PreloadingStrategy, withPreloading, PreloadAllModules } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding(), withPreloading(PreloadAllModules)),
    provideClientHydration(),
    provideHttpClient()
  ]
};
