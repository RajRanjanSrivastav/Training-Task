import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  temparr: any[] = [2, 'b', 1, 'a','g',5];
  temppov: any = [];
  tempneg: any = [];
  total = 0;
  old=0;

  //  make a form instance
  userForm: FormGroup = new FormGroup({
    amount: new FormControl('', [Validators.required]),
    fw: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    
    if (this.userForm.valid) {
      this.sort();
      let val = this.userForm.value.amount;
      // console.log(this.userForm.value.amount);
      this.old=this.total;
      this.total += val;
      if (this.userForm.value.amount < 0) {


        if (this.total  < 0) {
          this.total=this.old;
          alert('Insufficient Balance');
        } else {
          this.tempneg.push(this.userForm.value);
        }
      } else {
        this.temppov.push(this.userForm.value);
      }
    } else {
      alert('Please enter all the fields');
    }
    this.intialState();
  }

  // initial state
  intialState() {
    this.userForm = new FormGroup({
      amount: new FormControl('', [Validators.required]),
      fw: new FormControl('', [Validators.required]),
    });
  }

  // sorting
  sort() {
    console.log(this.temparr,"before");

    let char=[];
    let num=[];

    for (let i = 0; i < this.temparr.length; i++) {

     if(typeof(this.temparr[i])=="number")
     {
          num.push(this.temparr[i]);
     }
     else{
      char.push(this.temparr[i]);
     }
    }

    num.sort();
    char.sort();
    this.temparr=[];
    this.temparr = num.concat(char);
    console.log(this.temparr,"after");
  }
}
//   saving: number = 0;
//   credit: number = 0;
//   expence: number = 0;
//   amountVal: any=0;
//   temparr: any[] = [2, 'b', 1, 'a'];

//   showAmount(a: any) {
//     a = parseInt(a);
//     if (a >= 0) {
//       this.credit += a;
//       this.saving += a;
//     } else {
//       let trk = this.saving;
//       trk += a;

//       if (trk < 0) {
//         alert('Insuficient balance');
//       } else {
//         this.expence += -a;
//         this.saving += a;
//       }
//     }
//     this.amountVal = 0;
//     console.log(a);
//   }

 
// }
