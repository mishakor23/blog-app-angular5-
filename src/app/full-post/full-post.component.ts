import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../full-post/post/post.model';
import { PostService } from '../full-post/post/post.service';

@Component({
  selector: 'app-full-post',
  templateUrl: './full-post.component.html',
  styleUrls: ['./full-post.component.css']
})
export class FullPostComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.getPost();
  }

}
