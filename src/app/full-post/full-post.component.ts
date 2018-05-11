import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../full-post/post/post.model';
import { PostService } from '../full-post/post/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-full-post',
  templateUrl: './full-post.component.html',
  styleUrls: ['./full-post.component.css']
})
export class FullPostComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.posts = this.postService.getPost();
    // this.posts = [
    //   id: +this.route.snapshot.params['id'],
    //   title: this.route.snapshot.params['title']
    //
    // ];
  }

}
