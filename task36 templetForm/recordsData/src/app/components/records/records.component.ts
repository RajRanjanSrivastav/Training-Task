import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css'],
})
export class RecordsComponent {
  flag = true;
  delTrack = true;
  updTrack = true;
  updIndex: any;
  userarr: any = [];
  mainIndex: any;
  show = false;

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

  toggel() {
    // console.log(this.userData);
    // this.userData[0].proDetail.push({
    //   proId: this.uique(),
    //   term: 0,
    //   proname: 'raj ranjan',
    //   marks: 0,
    // })
    // this.userData=[
    //   {
    //     userid: this.uique(),
    //     name: '',
    //     className: '',
    //     section: '',
    //     proDetail: [
    //       {
    //         proId: this.uique(),
    //         term: 0,
    //         proname: '',
    //         marks: 0,
    //       },
    //     ],
    //   },
    // ];
    // console.log(this.userData);

    this.flag = !this.flag;

    let arr = [1, 'a', 3, 44, 'e', 'c', 1];

    let charArr = arr.filter((e) => typeof e === 'string');
    let numArr = arr.filter((e) => typeof e === 'number');

    charArr.sort();
    numArr.sort();
    arr = numArr.concat(charArr);
    // console.log(arr);
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
      this.userData = [
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
      this.show = true;
      setTimeout(() => {
        this.show = false;
      }, 2000);

      // for submit
      if (this.updTrack) {
        this.userarr.push(form.value);
        form.reset();
        this.toggel();
      }

      // work for update
      else {
        this.updTrack = true;
        this.update(form.value);
        form.reset();
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
    this.userData[0].proDetail.push({
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
  edit(index: any) {
    console.log(this.userarr, 'userarray');
    console.log(this.userData, 'userdata');

    this.updTrack = false;
    this.updIndex = index;
    this.toggel();
    this.userData.name = this.userarr[index].name;
    this.userData.className = this.userarr[index].class;
    this.userData.section = this.userarr[index].section;
    let proArr = this.userData[index].proDetail;

    for (let i = 0; i < proArr.length; i++) {
      let pro = `pro_${i}`;
      let term = `term_${i}`;
      let mark = `marks_${i}`;
      this.userData[index].proDetail[i].proname = this.userarr[index][pro];
      this.userData[index].proDetail[i].term = this.userarr[index][term];
      this.userData[index].proDetail[i].marks = this.userarr[index][mark];
    }
  }

  // for update the details
  update(val: any) {
    this.userarr[this.updIndex].name = val.name;
    this.userarr[this.updIndex].class = val.class;
    this.userarr[this.updIndex].section = val.section;
    let proArr = this.userData[this.updIndex].proDetail;

    for (let i = 0; i < proArr.length; i++) {
      let pro = `pro_${i}`;
      let term = `term_${i}`;
      let mark = `marks_${i}`;
      this.userarr[this.updIndex][pro] = val[pro];
      this.userarr[this.updIndex][term] = val[term];
      this.userarr[this.updIndex][mark] = val[mark];
    }

    this.toggel();
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
