import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SharedService } from '../services/shared/shared.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const sharedService = inject(SharedService);
  console.log('state: ', state);
  console.log('route: ', route);
  if (sharedService.isAuthenticated()) {
    return true;
  } else {
    router.navigate(['/landing'])
    return false;
  }
};
