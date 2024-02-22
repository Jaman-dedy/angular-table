import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideHttpClient } from '@angular/common/http';
import { CommerceReducer } from './states/commerce/commerce.reducer';
import { CommerceEffect } from './states/commerce/commerce.effect';
import { provideEffects } from '@ngrx/effects';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(),
    provideHttpClient(),
    provideStore(),
    provideState({ name: 'commerce', reducer: CommerceReducer }),
    provideEffects(CommerceEffect), provideAnimationsAsync()
  ]
};
