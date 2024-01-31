import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {
    this.getAllUser();
    // this.deleteUser();
    this.updateUser()
  }

  flag = false;
  data: any;
  id: any;
  // blogData: any;

  public authUser(value: any) {
    // let data = JSON.parse(localStorage.getItem('data')!);
    let match = false;
    for (let i = 0; i < this.data.length; i++) {
      if (
        value.email == this.data[i].email &&
        value.password == this.data[i].password
      ) {
        this.id = this.data[i].id;
        this.getAllBlog();
        match = true;
        break;
      }
    }
    if (match) {
      this.flag = true;
      return true;
    } else {
      this.flag = false;
      return false;
    }
  }

  // for get all the user
  getAllUser() {
    this.http.get('http://localhost:3000/user').subscribe((e) => {
      this.data = e;
      console.log(this.data);
    });
  }
  

  // for getting all blog
  // getAllBlog() {
  //   this.http
  //     .get('http://localhost:3000/user' + '/' + this.id)
  //     .subscribe((e) => {
  //       this.blogData = e;
  //       console.log(this.blogData, 'service se');
  //     });
  // }

  getAllBlog():Observable<any>{
    return this.http.get('http://localhost:3000/user' + '/' + this.id);
  }

  // for delete
  deleteUser(){
    return this.http.delete('http://localhost:3000/user/5a79').subscribe((e)=>{
      console.log(e);
    })
  }


  // for update
  updateUser(){
    return this.http.put('http://localhost:3000/user'+'/'+'3453',{'name':'raj lala'}).subscribe((e)=>{
      console.log(e);
    })
  }


}
