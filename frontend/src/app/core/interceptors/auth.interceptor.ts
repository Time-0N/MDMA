import {HttpInterceptorFn} from '@angular/common/http';
import {AuthWrapperService} from '../auth/auth-wrapper.service';
import {inject} from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthWrapperService);
  const token = auth.getAccessToken();

  const publicEndpoints = ['/api/auth/token', '/api/auth/register'];

  const isPublic = publicEndpoints.some(url => req.url.includes(url));

  if (token && !isPublic) {
    return next(req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    }));
  }

  return next(req);
};
