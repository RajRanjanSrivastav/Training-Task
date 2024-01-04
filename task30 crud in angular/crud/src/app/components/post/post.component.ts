import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent implements OnInit {
  ngOnInit(): void {
    this.fetchData();
  }

  constructor(private postServ: PostService) {}

  fetchData() {
    this.postServ.getAll().subscribe((data) => {
      console.log(data);
    });
  }
}
