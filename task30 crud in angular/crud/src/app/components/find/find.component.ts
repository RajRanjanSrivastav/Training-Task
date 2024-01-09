import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../interface/post';

@Component({
  selector: 'app-find',
  standalone: true,
  imports: [],
  templateUrl: './find.component.html',
  styleUrl: './find.component.css'
})
export class FindComponent {
 data: any;
 constructor(private findEle:PostService)
 {
    // this.data=this.findEle.post;
    setTimeout(()=>{
      console.log(this.findEle.post);
    },3000)
    
 }
 
 
}
