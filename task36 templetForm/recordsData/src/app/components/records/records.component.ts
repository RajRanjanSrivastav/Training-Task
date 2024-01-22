import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css'],
})
export class RecordsComponent {
  flag = true; //for toggel the page
  delTrack = true; //delete for neste form
  updTrack = true; //trak to show which btn---(submit/update)
  updIndex: any; //which one is going for update
  tableData: any = []; //show in table
  mainIndex: any;
  show = false;

  public formData: any = {
    name: '',
    className: '',
    section: '',
    proDetail: [
      {
        term: 0,
        proname: '',
        marks: 0,
      },
    ],
  };

  toggel() {
    this.flag = !this.flag;

    // let arr = [1, 'a', 3, 44, 'e', 'c', 1];

    // let charArr = arr.filter((e) => typeof e === 'string');
    // let numArr = arr.filter((e) => typeof e === 'number');

    // charArr.sort();
    // numArr.sort();
    // arr = numArr.concat(charArr);
    // console.log(arr);
  }

  track(item: any, index: number) {
    return index;
  }
  // for submitting the form
  submitForm(form: NgForm) {
    // console.log(form.value,"kya hai");

    if (form.valid) {
      this.show = true;
      setTimeout(() => {
        this.show = false;
      }, 2000);

      // for submit
      if (this.updTrack) {
        this.tableData.push(this.formData);
        (this.formData = {
          name: '',
          className: '',
          section: '',
          proDetail: [
            {
              term: 0,
              proname: '',
              marks: 0,
            },
          ],
        }),
          this.toggel();
      }

      // work for update
      else {
        this.updTrack = true;
        this.update(this.formData);
        this.formData = {
          name: '',
          className: '',
          section: '',
          proDetail: [
            {
              term: 0,
              proname: '',
              marks: 0,
            },
          ],
        };
      }
    } else {
      alert('please enter all the fields correctly');
    }
  }

  // click event for addMore is handle here if any one try to click without form validation
  handleClick(index: any, valid: any) {
    if (valid) {
      this.addMore(index);
    }

    // for alert if any one click the add more button without validation
    else {
      alert('Please fill all the fields');
    }
  }

  //for add more project details cards
  addMore(index: any) {
    this.delTrack = false;
    this.formData.proDetail.push({
      term: 0,
      proname: '',
      marks: 0,
    });
  }

  // this is for deleting the project details card
  delMore(cardIdx: any, contIdx: any) {
    let temp = [];
    let loop = this.formData.proDetail;
    for (let i = 0; i < loop.length; i++) {
      if (i != cardIdx) {
        temp.push(loop[i]);
      }
    }
    this.formData.proDetail = temp;
  }

  // this is for edit the data of student
  edit(index: any) {
    this.formData = this.tableData[index];
    this.updTrack = false; //track for show submit and update button
    this.updIndex = index; //which one is going for update
    this.toggel(); //page change
  }

  // for update the details
  update(val: any) {
    this.tableData[this.updIndex] = val;
    this.toggel();
  }

  // this is remove function from table
  remove(index: any) {
    let temp = [];
    for (let i = 0; i < this.tableData.length; i++) {
      if (i != index) {
        temp.push(this.tableData[i]);
      }
    }
    this.tableData = temp;

    if (this.updIndex == index) {
      this.updTrack = true;
      this.formData = {
        name: '',
        className: '',
        section: '',
        proDetail: [
          {
            term: 0,
            proname: '',
            marks: 0,
          },
        ],
      };
    }
  }
}
