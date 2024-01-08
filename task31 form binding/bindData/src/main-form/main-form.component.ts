import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Custom } from '../models/form-data';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-main-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './main-form.component.html',
  styleUrl: './main-form.component.css',
})
export class MainFormComponent{
  index = 0;
  nameData = '';
  emailData = '';
  trck = true;
  list: Array<Custom> = [];
  temp: any;
  email = new FormControl('');
  name = new FormControl('');
  dataForm = new FormGroup({
    name: this.name,
    email: this.email,
  });

  submit() {
    this.temp = this.dataForm.value;
    this.temp.id = this.getID();
    this.list.push(this.temp);
    console.log(this.list);
    this.nameData = '';
    this.emailData = '';
  }
  getID() {
    return Math.floor(Math.random()*100);
  }

  // for delete item
  remove(id: any) {
    this.list = this.list.filter((e) => e.id != id);
  }

  // for eidt
  edit(id: any) {
    this.index = id;
    this.trck = false;
    // console.log(id);
    this.temp = this.list[id];
    this.nameData = this.temp.name;
    this.emailData = this.temp.email;
    
  }

  // for update
  update() {
    this.trck = true;
    this.nameData = '';
    this.emailData = '';
    // console.log(this.list);
    // console.log(this.dataForm.value);
    this.temp = this.dataForm.value;
    this.list[this.index] = this.temp;
  }


  
  
}
