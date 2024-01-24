import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit  {
  constructor(private auth: AuthService, private router: Router) {}
  ngOnInit(): void {
    this.auth.flag=false;
  }


  register: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  login: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  //function for registration
  onRegister(form: any) {
    console.log(form.valid);

    let data: any;

    // Get the existing data
    let existing = JSON.parse(localStorage.getItem('data')!);

    // If no existing data, create an array
    // Otherwise, convert the localStorage string to an array
    data = existing ? existing : [];

    data.push(form.value);
    // Save back to localStorage
    localStorage.setItem('data', JSON.stringify(data));

    // reset the form
    this.register.reset();
  }

  //fucntion for login
  onLogin(form: any) {
    if (this.auth.authUser(form.value)) {
      this.router.navigate(['/dashboard']);
    } else {
      alert('Your user-name or password is incorect');
    }

    form.reset();
  }
}