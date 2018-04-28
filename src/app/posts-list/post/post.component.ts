import { Component, OnInit } from '@angular/core';
import { Post } from './post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: Post[] = [
    new Post(1, 'A car post', 'post about cars', '12.04.2015')
  ];

  constructor() { }

  ngOnInit() {
  }

}
