import { Time } from "@angular/common";

export interface TaskData {
   id:any,
   name:String,
   assign:String,
   deadline:String,
   type:String,
   status:String,
   time:Time,
}
