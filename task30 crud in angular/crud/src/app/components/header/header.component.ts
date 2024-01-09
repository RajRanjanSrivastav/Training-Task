import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Post } from '../../interface/post';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private serach: PostService) {}
  findData(val: any) {
    this.serach.find(val).subscribe((data) => {
      this.serach.post = data;
      console.log(this.serach.post);
      
    });
  }
}
