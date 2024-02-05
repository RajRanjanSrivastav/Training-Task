import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { blogPara } from 'src/app/models/blogPara';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private http: HttpClient, private auth: AuthService,private router: Router,) {}
  ngOnInit() {
    let sessionData = JSON.parse(sessionStorage.getItem('sessionData')!);
    this.userName=sessionData.name;
    this.userId=sessionData.id;
    console.log(sessionData);
    
    this.auth.getAllBlog(sessionData.id).subscribe((e) => {
      console.log(e,'blog se');
      
      this.blogData = e;
      console.log(this.blogData);
      
      if (e.blog.length == 1) {
        this.dataFlag = true;
      } else {
        this.dataFlag = false;
      }
    });
  }
  userName:any;
  userId:any;
  blogData: any;
  blogPara: blogPara = {
    id: 0,
    thought: '',
  };
 
  dataFlag = false;
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
    this.blogData.blog.push(this.blogPara)
    this.http.put('http://localhost:3000/user/'+this.userId+'/',this.blogData).subscribe((e)=>{
      console.log(e);
    })
    // this.blogData.push(this.blogPara);
    // this.http.delete('http://localhost:3000/user/1');
    form.reset();
  }

  // for logout
  logOut(){
    sessionStorage.clear();
    this.router.navigate(['/']);
  }

  // for remove thought
  removeThought(index:any){
    console.log(index);
    let blogid = this.blogData.blog[index].id;
    console.log(this.blogData.blog);
    
    this.blogData.blog = this.blogData.blog.filter((e:any) => blogid!=e.id);
    this.http.put('http://localhost:3000/user/'+this.userId+'/',this.blogData).subscribe((e)=>{
      console.log(e);
    })
    console.log(this.blogData.blog);
    
  }
}
