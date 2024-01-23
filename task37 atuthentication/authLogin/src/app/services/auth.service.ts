import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  flag=false;
  constructor() {}

  public authUser(value: any) {
    let data = JSON.parse(localStorage.getItem('data')!);
    let match = false;
    for (let i = 0; i < data.length; i++) {

      if (value.email == data[i].email && value.password == data[i].password) {
        console.log(match);

        match = true;
        break;
      }
    }
    if (match) {
      this.flag=true;
      return true;
    } else {
      this.flag=false;
      return false;
    }
  }
}
