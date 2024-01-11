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
  position = ['Option 1', 'Option 2', 'Option 3'];
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
    city: new FormControl('', [Validators.required]),
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
    console.log(this.userForm.valid);

    console.log(this.userForm.value);
  }

  toggel(id1: any, id2: any) {
    console.log(this.state);

    // console.log(this.stateData[0]);

    // this.stateData.map((e: any) => {
    //   e.city.map((i: any) => {
    //     console.log(i.name);
    //   });
    //   // console.log(e.city);
    // });

    // for(let i of this.stateData)
    // {
    //   console.log(i.state);

    // }

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

  // end

  getCity(e:any) {
    console.log(e);
    this.cityArr = this.stateData.find(((state: { state: any; })=>state.state===e)).city
    console.log(this.cityArr);
    this.cityArr.forEach((i)=>{
      console.log(i);
      
    })
    
  }
}
