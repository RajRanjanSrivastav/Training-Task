import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskData } from 'src/app/Models/task-data';
import { TasksTrackService } from 'src/app/services/tasks-track.service';

@Component({
  selector: 'app-making-tasks',
  templateUrl: './making-tasks.component.html',
  styleUrls: ['./making-tasks.component.css'],
})
export class MakingTasksComponent implements OnInit {

  constructor(private taskServ:TasksTrackService){}
  ngOnInit() {
    this.taskServ.getData().subscribe((e)=>{
      this.taskArr = e;
      console.log(this.taskArr);
      
    })
   
  }

  tasks:TaskData={
    id: '',
    name: '',
    assign: '',
    deadline: '',
    type: '',
    time: {
      hours: 0,
      minutes: 0
    }
  }
  taskArr=[];

  taskForm = new FormGroup({
    taskname: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    assign: new FormControl('', [Validators.required]),
    deadline: new FormControl('', [Validators.required]),
  });

  formReset()
  {
    this.taskForm.reset();
  }
 
  onSubmit(){
    if(this.taskForm.valid)
    {
      let hour = new Date().getHours();
      let min = new Date().getMinutes();
      let value = this.taskForm.value;
      this.tasks.name = value.taskname!;
      this.tasks.assign = value.assign!;
      this.tasks.deadline = value.deadline!;
      this.tasks.type = value.type!;
      this.tasks.id = Date.now();
      this.tasks.time.hours = hour;
      this.tasks.time.minutes = hour;
      this.taskServ.addData(this.tasks);
    }
    this.formReset();

    this.taskServ.getData().subscribe((e)=>{
      console.log(e,"data");
      this.taskArr=e;
      console.log(this.taskArr,"andar se");
      
      
    })
  }
}
