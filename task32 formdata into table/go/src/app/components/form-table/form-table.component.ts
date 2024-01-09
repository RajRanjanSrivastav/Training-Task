import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { StatesService } from '../../../services/states.service';

@Component({
  selector: 'app-form-table',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './form-table.component.html',
  styleUrl: './form-table.component.css',
})
export class FormTableComponent  {

  constructor(private stateServ:StatesService)
  {
     this.stateServ.fetchData()

  }
  stateData:any;
  flag=false;
  title = 'REGISTRATION FORM';
  name = '';
  email = '';
  phone = '';
  gender = '';
  pos = '';
  country = '';
  address = '';
  registerForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    gender: new FormControl(''),
    position: new FormControl(''),
    country: new FormControl(''),
    address: new FormControl(''),
  });

  onRegister() {
    console.log('hjk');
    this.name = '';
    this.email = '';
    this.phone = '';
    this.gender = '';
    this.pos = '';
    this.country = '';
    this.address = '';
    console.log(this.registerForm.value);
  }

  toggel(id1: any , id2:any){
    
   
   
   console.log(this.stateServ.data);
   
    
    
    // console.log(id1, id2);

    let form = document.getElementById(id1);
    let table = document.getElementById(id2);
    
    if(this.flag==false)
    {
      
      table!.style.display="block";
      form!.style.display="none";
   
    }
    else{
      table!.style.display="none";
      form!.style.display="block";
    }
    
    this.flag = !this.flag;
    let ele = document.getElementsByClassName('holder');
    console.log(ele);
    
  }
}

