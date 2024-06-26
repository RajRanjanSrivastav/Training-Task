import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../interface/post';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [NgFor],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent implements OnInit {
  posts: Post[] = [];
  // item:Post | undefined;
  ngOnInit(): void {
    this.fetchData();
  }

  constructor(private postServ: PostService) {}

  fetchData() {
    this.postServ.getAll().subscribe((data) => {
      this.posts = data;
      // console.log(data);
      console.log(this.posts);
    });
    // this.postServ.find(1).subscribe((data)=>{
    //   console.log(data);
    // });
    // this.postServ.deleteFun(1).subscribe((data)=>{
    //   console.log(data);
    // });

    // this.postServ.create(this.item).subscribe
  }

  deleteItem(id: number) {
    this.postServ.deleteFun(id);
    this.posts = this.posts.filter((e) => e.id != id);
    console.log(this.posts);
  }
  
}
