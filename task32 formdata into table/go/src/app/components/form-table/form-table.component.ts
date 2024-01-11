import { KeyValuePipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
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
  stateData: any;
  flag = false;
  trackBtn = false;
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
  idNum: number | undefined;
  temp: any = [];
  editList: any;
  indexUpdate: any;
  trakError = false;

  // userForm: any;
  constructor(private stateServ: StatesService) {
    console.log('kjg');
  }

  // here we store the state data
  ngOnInit(): void {
    this.idNum = Math.floor(Math.random() * 100 + 1);
    setTimeout(() => {
      this.stateData = this.stateServ.data;
    }, 1000);
  }

  play() {
    this.trakError = true;
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
    idNum: new FormControl(''),
    address: new FormControl('', [Validators.required]),
  });

  // fucntion for empty the input field
  emptyField() {
    this.name = '';
    this.email = '';
    this.phone = '';
    this.gender = '';
    this.pos = '';
    this.state = '';
    this.city = '';
    this.street = '';
    this.zip = '';
    this.address = '';
  }

  // fucntion for update the input field
  updateBox(tempList: any) {
    // console.log(tempList);
    this.idNum = tempList.idNum;
    this.name = tempList.name;
    this.email = tempList.email;
    this.phone = tempList.phone;
    this.pos = tempList.position;
    this.address = tempList.address;
    this.state = tempList.state;
    this.city = tempList.city;
    this.street = tempList.street;
    this.zip = tempList.zip;
    this.gender = tempList.gender;
  }

  // fucntion for add the data in table
  onRegister() {
    // console.log('hjk');
    if (this.userForm.valid) {
      this.emptyField();
      let tempId = Math.floor(Math.random() * 100 + 1);
      if (this.idNum != tempId) {
        this.idNum = tempId;
      }

      let sucEle = document.getElementById('suc-box');
      sucEle!.classList.toggle('show');
      setTimeout(() => {
        sucEle!.classList.toggle('show');
      }, 2000);
      this.temp.push(this.userForm.value);
    }

    // console.log(this.temp);
    // console.log(this.userForm.valid);
    // console.log(this.userForm.value);
  }

  // this fucntion for show/hide
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

  // end

  // this fucntion for find the cities crorresponding to state
  getCity(e: any) {
    this.cityArr = this.stateData.find(
      (state: { state: any }) => state.state === e
    ).city;
  }

  edit(id: any) {
   
    this.temp.forEach((e: any, index: any) => {
  ;
      if (e.idNum == id) {
    
        this.indexUpdate = index;
        this.editList = e;
      }
    });
    // console.log(this.editList);

    this.updateBox(this.editList);
    this.trackBtn = !this.trackBtn;
  }

  // for update the element
  update() {
    if (this.userForm.valid) {
      this.emptyField();
      this.trackBtn = !this.trackBtn;
      let sucEle = document.getElementById('suc-box');
      sucEle!.classList.toggle('show');
      setTimeout(() => {
        sucEle!.classList.toggle('show');
      }, 2000);
      // console.log(this.userForm.value);
      this.temp[this.indexUpdate] = this.userForm.value;
    }
  }

  // for remove the element
  remove(e: any) {
    // console.log(e.item);
    // console.log(this.temp);
    this.temp = this.temp.filter((j: any) => j != e.item);
  }
}
