import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskData } from '../Models/task-data';
import { UserData } from '../Models/UserData';

@Injectable({
  providedIn: 'root'
})
export class TasksTrackService {
  flag=false;

  constructor(private http:HttpClient) { }


  api = 'http://localhost:3000/';


  // add Data
  addData(data:TaskData)
  {
    return this.http.post(this.api+'data',data).subscribe((e)=>{
      console.log(e,"post se");
    })
  }

  // add user
  addUser(userData:UserData)
  {
    return this.http.post(this.api+'user',userData).subscribe((e)=>{
      console.log(e,"post se");
    })
  }

  // get all data
  getData():Observable<any>{
    return this.http.get(this.api+'data');
  }

  // get all user
  getAllUser():Observable<any>{
    return this.http.get(this.api+'user');
  }

  // Update the data
  updateData(id:any,data:TaskData)
  {
    return this.http.put(this.api+'data'+'/'+id,data).subscribe((e)=>{
      console.log(e,"update se");
    })
  }
}
