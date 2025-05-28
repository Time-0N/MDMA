import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import {provideHttpClient, withInterceptors} from '@angular/common/http';

import { routes } from './app.routes';
import {BASE_PATH} from '../../generated';
import {authInterceptor} from '../interceptors/auth.interceptor';
import {provideState, provideStore} from '@ngrx/store';
import {userFeatureName, userReducer} from '../../store/user-store/user-store.reducer';
import {provideEffects} from '@ngrx/effects';
import {UserStoreEffects} from '../../store/user-store/user-store.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([authInterceptor])
    ),
    provideStore(),
    provideState(userFeatureName, userReducer),
    provideEffects([UserStoreEffects]),
  ]
};
