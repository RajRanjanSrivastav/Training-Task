import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatesService {

  constructor(private http:HttpClient) { }
  data:any;

  fetchData()
  {
    this.http.get("assets/db.json").subscribe((e)=>{
      this.data=e;
    });
  }
}
