import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  flag = false;
  // currentId: any;
  apiUrl = 'http://localhost:3000/user';
  // blogData: any;

  public  authUser(value: any) {
    let data = this.getAllUser();
    console.log(data, 'fucntion se');
    // let match = this.checkUser(data, value);
    return true;
  }
  // for get all the user
  getAllUser(): Observable<any> {
    return this.http.get(this.apiUrl);
    // return this.http.get(`http://192.168.100.29:5001/getcountryinfo`);
    
  }

  getAllBlog(id:any): Observable<any> {  
    return this.http.get(this.apiUrl + '/' + id);
  }

  // for delete
  deleteUser(id:any) {
    return this.http
      .delete(this.apiUrl+'/'+id)
      .subscribe((e) => {
        console.log(e);
      });
  }

  // for update
  updateUser() {
    return this.http
      .put('http://localhost:3000/user' + '/' + '3453', { name: 'raj lala' })
      .subscribe((e) => {
        console.log(e);
      });
  }


  // for post user 
  addUser(data:any)
  {
    return this.http.post(this.apiUrl,data).subscribe((e)=>{
      console.log(e);
    });
  }
}
