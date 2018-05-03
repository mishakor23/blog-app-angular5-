import { Component, OnInit } from '@angular/core';
import { Post } from './post/post.model';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

    posts: Post[] = [
      new Post(1, 'A car post', 'post about cars', new Date(), [{id: 1, userName: 'Rolya', message: 'sdfasdf'}]),
      new Post(2, 'A car post', 'post about cars', new Date(), [{id: 2, userName: 'Kolya', message: 'sdfasdf'}, {id: 3, userName: 'Ann', message: 'sdfasdfsadfdgsa'}]),
      new Post(3, 'A car post', 'post about cars', new Date(), [{id: 4, userName: 'Olya', message: 'sdfasdf'}, {id: 5, userName: 'Stan', message: 'sdfasdf'}, {id: 6, userName: 'Sam', message: 'sdfasdf'}])
    ];


  constructor() { }

  ngOnInit() {
  }

}
