import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn   = (route, state) => {

  const service = inject(AuthService);
  if(service.flag){
      return true;
  }
  return false;
  
};

