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
    this.http.get("assets/t.json").subscribe((e)=>{
      this.data=e;
    });
  }
}
