import { KeyValuePipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validator,
  Validators,
} from '@angular/forms';
import { StatesService } from '../../../services/states.service';
@Component({
  selector: 'app-form-table',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor, KeyValuePipe],
  templateUrl: './form-table.component.html',
  styleUrl: './form-table.component.css',
})
export class FormTableComponent implements OnInit {
  [x: string]: any;
  stateData: any;
  flag = false;
  title = 'REGISTRATION FORM';
  name = '';
  email = '';
  phone = '';
  gender = '';
  pos = '';
  state = '';
  city = '';
  street = '';
  zip = '';
  address = '';
  cityArr = [];
  // userForm: any;

  constructor(private stateServ: StatesService) {}
  ngOnInit(): void {
    setTimeout(() => {
      this.stateData = this.stateServ.data;
    }, 1000);
  }

  // email = new FormControl('',[Validators.required,Validators.email]);

  userForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]{10}'),
    ]),
    gender: new FormControl('', [Validators.required]),
    position: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    city: new FormControl('',[Validators.required]),
    street: new FormControl('', [Validators.required]),
    zip: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]{6}'),
    ]),
    address: new FormControl('', [Validators.required]),
  });

  onRegister() {
    console.log('hjk');
    // this.name = '';
    // this.email = '';
    // this.phone = '';
    // this.gender = '';
    // this.pos = '';
    // this.country = '';
    // this.city = '';
    // this.address = '';
    console.log(this.userForm.value);
  }

  toggel(id1: any, id2: any) {
    let form = document.getElementById(id1);
    let table = document.getElementById(id2);

    if (this.flag == false) {
      table!.style.display = 'block';
      form!.style.display = 'none';
    } else {
      table!.style.display = 'none';
      form!.style.display = 'block';
    }

    this.flag = !this.flag;
  }
}
