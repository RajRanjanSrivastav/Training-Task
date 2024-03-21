import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskData } from 'src/app/Models/task-data';
import { TasksTrackService } from 'src/app/services/tasks-track.service';

@Component({
  selector: 'app-making-tasks',
  templateUrl: './making-tasks.component.html',
  styleUrls: ['./making-tasks.component.css'],
})
export class MakingTasksComponent implements OnInit {
  constructor(private taskServ: TasksTrackService, private router: Router) {}
  ngOnInit() {
    this.getTaskList();
    
  }

  public getTaskList() {
    this.taskServ.getData().subscribe((e) => {
      this.taskArr = e;
      this.totalTask = e.length;
      console.log(this.taskArr);
    });
  }

  tasks: TaskData = {
    id: '',
    name: '',
    assign: '',
    deadline: '',
    type: '',
    status: '',
    time: {
      hours: 0,
      minutes: 0,
    },
  };
  taskArr = [];
  oldMin: any;
  oldHour: any;
  updateTrack = false;
  editIndex: any;
  name: any;
  type: any;
  assign: any;
  deadlineTrack = true;
  deadline: any;
  status: any;
  totalTask = 0;

  chekcRange() {
    console.log('kj');
    this.deadlineTrack = false;
    console.log(this.deadlineTrack);
  }

  taskForm = new FormGroup({
    taskname: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    assign: new FormControl('', [Validators.required]),
    deadline: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
  });

  formReset() {
    this.taskForm.reset();
  }

  onSubmit() {
    if (this.taskForm.valid) {
      if (this.updateTrack) {
        this.updateTrack = !this.updateTrack;
        console.log(this.updateTrack, 'submit se');

        let hour = this.oldHour;
        let min = this.oldMin;
        let value = this.taskForm.value;
        this.tasks.id = `${this.editIndex}`;
        this.tasks.name = value.taskname!;
        this.tasks.assign = value.assign!;
        this.tasks.deadline = value.deadline!;
        this.tasks.type = value.type!;
        this.tasks.status = value.status!;
        this.tasks.time.hours = hour;
        this.tasks.time.minutes = min;
        console.log(this.tasks, 'edit updating');

        this.taskServ.updateData(this.editIndex, this.tasks);
      } else {
        console.log(this.updateTrack, 'else se', this.taskForm.value);

        let hour = new Date().getHours();
        let min = new Date().getMinutes();
        let value = this.taskForm.value;
        this.tasks.name = value.taskname!;
        this.tasks.assign = value.assign!;
        this.tasks.deadline = value.deadline!;
        this.tasks.type = value.type!;
        this.tasks.status = value.status!;
        this.tasks.id = `${Date.now()}`;
        this.tasks.time.hours = hour;
        this.tasks.time.minutes = min;
        this.taskServ.addData(this.tasks);
        this.getTaskList();
      }
    }
    this.formReset();

    this.taskServ.getData().subscribe((e) => {
      this.taskArr = e;
    });
  }

  editData(index: any) {
    this.updateTrack = !this.updateTrack;
    this.editIndex = this.taskArr[index]['id'];
    this.oldHour = this.taskArr[index]['time']['hours'];
    this.oldMin = this.taskArr[index]['time']['minutes'];

    console.log(this.updateTrack, 'edit se');
    console.log(this.editIndex);

    this.name = this.taskArr[index]['name'];
    this.type = this.taskArr[index]['type'];
    this.assign = this.taskArr[index]['assign'];
    this.deadline = this.taskArr[index]['deadline'];
    this.status = this.taskArr[index]['status'];
    // console.log(this.updateTrack);
    // console.log(this.taskArr[index]['id'],"--",index);
  }

  // logout
  logout() {
    sessionStorage.clear();
    sessionStorage.setItem('flag', 'false');
    this.router.navigate(['/']);
  }
}
