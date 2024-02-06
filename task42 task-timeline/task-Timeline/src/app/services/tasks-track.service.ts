import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskData } from '../Models/task-data';

@Injectable({
  providedIn: 'root'
})
export class TasksTrackService {

  constructor(private http:HttpClient) { }


  api = 'http://localhost:3000/data';


  // add Data
  addData(data:TaskData)
  {
    return this.http.post(this.api,data).subscribe((e)=>{
      console.log(e,"post se");
    })
  }

  // get all data
  getData():Observable<any>{
    return this.http.get(this.api);
  }

  // Update the data
  updateData(id:any,data:TaskData)
  {
    return this.http.put(this.api+'/'+id,data).subscribe((e)=>{
      console.log(e,"update se");
      
    })
  }
}
