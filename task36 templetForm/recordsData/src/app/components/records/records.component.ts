import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css'],
})
export class RecordsComponent {
  flag = true;
  delTrack = true;
  // strarr: { htmlContent: string }[] = [];

  public userData: any = [
    {
      userid: this.uique(),
      name: '',
      className: '',
      section: '',
      proDetail: [
        {
          proId: this.uique(),
          term: 0,
          proname: '',
          marks: 0,
        },
      ],
    },
  ];

  userarr: any = [];
  strarr = ['h'];
  mainIndex: any;

  toggel() {
    this.flag = !this.flag;
  }

  uique() {
    return Math.floor(Math.random() * 100 + 1);
  }

  track(item: any, index: number) {
    return index;
  }
  // for submitting the form
  submitForm(form: NgForm) {
    if (form.valid) {
      console.log(form.value, 'andar');
      this.userarr.push(form.value);
      form.reset();
      this.toggel();
    } else {
      alert('please enter all the fields correctly');
    }
  }

  

  //for add more project details cards
  addMore(id: any) {
    this.delTrack = false;
    console.log(id);
    this.userData[id].proDetail.push({
      proId: this.uique(),
      term: 0,
      proname: '',
      marks: 0,
    });
  }

  // this is for deleting the project details card
  delMore(cardIdx: any, contIdx: any) {
    let temp = [];
    let loop = this.userData[contIdx].proDetail;
    for (let i = 0; i < loop.length; i++) {
      if (i != cardIdx) {
        temp.push(loop[i]);
      }
    }
    this.userData[contIdx].proDetail = temp;
  }


  // this is for edit the data of student
  edit(id:any){
    console.log(id);
    
  }
  // this is remove function from table
  remove(id: any) {
    let temp = [];
    for (let i = 0; i < this.userarr.length; i++) {
      if (i != id) {
        temp.push(this.userarr[i]);
      }
    }
    this.userarr = temp;
  }
}
