import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatesService {

  constructor(private http:HttpClient) {
    this.fetchData();
   }
  data:any;

  fetchData()
  {
    // this.http.get("assets/db.json").subscribe((e)=>{
    //   this.data=e;
    // });
    this.http.get("http://192.168.100.29:5001/getcountryinfo").subscribe((e)=>{
      this.data=e;
      console.log(this.data,"chekcing");
    });

  }
}
