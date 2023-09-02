import { CanActivateFn,ActivatedRouteSnapshot,  RouterStateSnapshot, UrlTree  } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {TokenAuthServiceService} from '../services/token-auth-service.service';
import { inject } from '@angular/core';
export const authGuard: CanActivateFn = ( route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot) => {

    const isValidToken = inject(TokenAuthServiceService).isValidToken();
    if (!isValidToken) {
      inject(Router).navigate(['/home']);
      return false;
    }
    return true;
};
