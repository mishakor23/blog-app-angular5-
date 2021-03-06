import { Component, OnInit } from '@angular/core';
import { Post } from '../full-post/post/post.model';
import { PostService } from '../full-post/post/post.service';


@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

    posts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.getPost();
  }

}
