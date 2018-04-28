import { Component, OnInit } from '@angular/core';
import { Post } from './post/post.model';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts: Post[] = [
    new Post(1, 'A car post', 'post about cars', '12.04.2015')
  ];

  constructor() { }

  ngOnInit() {
  }

}
