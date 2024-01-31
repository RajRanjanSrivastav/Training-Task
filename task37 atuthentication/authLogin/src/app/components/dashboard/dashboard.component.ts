import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { blogPara } from 'src/app/models/blogPara';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  blogData: any;
  blogPara: blogPara = {
    id: 0,
    thought: '',
  };
  dataFlag = false;
  constructor(private http: HttpClient, private auth: AuthService) {}
  ngOnInit() {
    this.auth.getAllBlog().subscribe((e) => {
      this.blogData = e.blog;
      if (e.blog.length == 0) {
        this.dataFlag = true;
      } else {
        this.dataFlag = false;
      }
    });
  }
  blogText: FormGroup = new FormGroup({
    thought: new FormControl('', [Validators.required]),
  });

  postThought(form: any) {
    console.log(this.blogData);
    console.log(form.value);
    this.blogPara = {
      id: Date.now(),
      thought: form.value.thought,
    };
    this.blogData.push(this.blogPara);
    this.http.delete('http://localhost:3000/user/1');
    form.reset();
  }
}
