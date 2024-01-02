import { Component, OnInit, inject, isStandalone } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [HttpClient],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  data: any[] = [];
  private httpClient = inject(HttpClient);
  constructor() { }
  ngOnInit(): void {
    this.fetchData();
  }
  private fetchData(): void {
    this.httpClient.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((posts) => {
        console.log(posts);
      });
  }
}
