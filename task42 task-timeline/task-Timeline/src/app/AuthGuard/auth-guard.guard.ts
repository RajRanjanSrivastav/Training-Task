import { CanActivateFn } from '@angular/router';
import { TasksTrackService } from '../services/tasks-track.service';
import { inject } from '@angular/core';

export const authGuardGuard: CanActivateFn = (route, state) => {

  const service = inject(TasksTrackService);
  let chk = sessionStorage.getItem('flag');
  if (chk == 'true') {
    return true;
  }
  else{
    if(service.flag){
      return true;
    }
    return false;
  }

};
