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
  state = '';
  cityArr: any;
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

  //  make a form instance
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
    termtick: new FormControl(false, [Validators.requiredTrue]),
    feedback: new FormControl(false, [Validators.requiredTrue]),
    feedText: new FormControl(''),
    address: new FormControl('', [Validators.required]),
  });

  // for go to initial state
  intialState(e: any) {
    this.userForm = new FormGroup({
      idNum: new FormControl(e.idNum),
      name: new FormControl(e.name, [Validators.required]),
      email: new FormControl(e.email, [Validators.required, Validators.email]),
      phone: new FormControl(e.phone, [
        Validators.required,
        Validators.pattern('[0-9]{10}'),
      ]),
      gender: new FormControl(e.gender, [Validators.required]),
      position: new FormControl(e.position, [Validators.required]),
      state: new FormControl(e.state, [Validators.required]),
      city: new FormControl(e.city, [Validators.required]),
      street: new FormControl(e.street, [Validators.required]),
      zip: new FormControl(e.zip, [
        Validators.required,
        Validators.pattern('[0-9]{6}'),
      ]),
      termtick: new FormControl(e.termtick, [Validators.requiredTrue]),
      feedback: new FormControl(e.feedback, [Validators.requiredTrue]),
      feedText: new FormControl(e.feedText),
      address: new FormControl(e.address, [Validators.required]),
    });
  }

  // fucntion for add the data in table
  onRegister() {
    // console.log('hjk');
    if (this.userForm.valid) {
      let tempId = Math.floor(Math.random() * 100 + 1);
      if (this.idNum != tempId) {
        this.idNum = tempId;
      }
      document.getElementById('city-ele')!.style.display = 'none';
      let sucEle = document.getElementById('suc-box');
      sucEle!.classList.toggle('show');
      setTimeout(() => {
        sucEle!.classList.toggle('show');
      }, 2000);
      this.temp.push(this.userForm.value);
      this.intialState('');
    } else {
      alert('All fields are required');
    }

    // console.log(this.temp);
    // console.log(this.userForm.valid);
    // console.log(this.userForm.value);
  }

  // this fucntion for show/hide
  toggel() {
    this.flag = !this.flag;
  }

  feedTrack = true;
  feedbacktoggel() {
    this.feedTrack = !this.feedTrack;
  }

  // this fucntion for find the cities crorresponding to state
  getCity(e: any, eleid: any) {
    document.getElementById(eleid)!.style.display = 'block'; // use directive --
    this.stateData.forEach((tempState: any) => {
      if (tempState.state === e) {
        this.cityArr = tempState.city;
        return;
      }
    });
  }

  //for edit
  edit(id: any) {
    this.temp.forEach((e: any, index: any) => {
      if (e.idNum == id) {
        this.indexUpdate = index;
        this.editList = e;
      }
    });
    console.log(this.editList);

    this.intialState(this.editList);
    this.trackBtn = !this.trackBtn;
  }

  // for update the element
  update() {
    if (this.userForm.valid) {
      this.temp[this.indexUpdate] = this.userForm.value;
      this.intialState('');
      this.trackBtn = !this.trackBtn;
      document.getElementById('city-ele')!.style.display = 'none';
      let sucEle = document.getElementById('suc-box');
      sucEle!.classList.toggle('show');
      setTimeout(() => {
        sucEle!.classList.toggle('show');
      }, 2000);
      // console.log(this.userForm.value);
    }
  }

  // for remove the element
  remove(e: any) {
    // this.temp = this.temp.filter((j: any) => j != e.item);

    // without using any built in function
    let itemHolder: any[] = []; //for holding remaning items
    this.temp.forEach((j: any) => {
      if (j != e.item) {
        itemHolder.push(j);
      }
    });
    this.temp = itemHolder;
  }
}
