import { Component } from '@angular/core';
import { Post } from '../../interface/post';
import { PostService } from '../../services/post.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgFor],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
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