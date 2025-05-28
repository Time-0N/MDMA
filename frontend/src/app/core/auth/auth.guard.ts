import { CanActivateFn, UrlTree, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthWrapperService } from './auth-wrapper.service';

export const authGuard: CanActivateFn = (): boolean | UrlTree => {
  const auth = inject(AuthWrapperService);
  const router = inject(Router);

  return auth.isAuthenticated()
    ? true
    : router.createUrlTree(['/']);
};
