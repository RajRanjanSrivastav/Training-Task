import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserData } from 'src/app/Models/UserData';
import { TasksTrackService } from 'src/app/services/tasks-track.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private auth: TasksTrackService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.auth.flag = false;
  }

  register = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  login = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  //function for registration
  onRegister(formVal:any) {
    // let form = this.register;
    let fomrValue = formVal.value;
    console.log(fomrValue,"just chek")
    // console.log(form.valid);
    // console.log(this.register);
    

    if (formVal.valid) {
      let match = false;
      let value = fomrValue;
      this.auth.getAllUser().subscribe((e) => {
        let data = e;
        for (let i = 0; i < data.length; i++) {
          if (value.email == data[i].email) {
            match = true;
            break;
          }
        }

        // checking

        if (match) {
          alert('this email is alerady exist.');
        } 
        else {
          console.log(fomrValue,"just checking for form");
          
          let data: UserData = {
            id: `${Date.now()}`,
            name: fomrValue.name!,
            email: fomrValue.email!,
            password: fomrValue.password!,
          };
          let sucEle = document.getElementById('suc-box');
          sucEle!.classList.toggle('show');
          setTimeout(() => {
            sucEle!.classList.toggle('show');
          }, 2000);
  
          console.log(data,"aya ki nahi");
          
          this.auth.addUser(data);
        }
      });
    } 
    else {
      alert('Please fill all details correctly');
    }
    this.register.reset();
  }

  //fucntion for login
  onLogin(form: any) {
    let value = form.value;
    // this.http.post('https://dev.kreatetechnologies.com/jbvnl-api/')
    this.auth.getAllUser().subscribe((e) => {
      let data = e;
      let match = false;
      for (let i = 0; i < data.length; i++) {
        if (
          value.email == data[i].email &&
          value.password == data[i].password
        ) {
          sessionStorage.setItem(
            'sessionData',
            JSON.stringify({ id: data[i].id, name: data[i].name })
          );
          match = true;
          break;
        }
      }

      if (match) {
        this.auth.flag = true;
        sessionStorage.setItem('flag', 'true');
        this.router.navigate(['/app-making-tasks']);
      } else {
        alert('Your user-name or password is incorect');
      }
    });

    form.reset();
  }
}
