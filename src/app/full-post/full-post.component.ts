import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../full-post/post/post.model';
import { PostService } from '../full-post/post/post.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-full-post',
  templateUrl: './full-post.component.html',
  styleUrls: ['./full-post.component.css']
})
export class FullPostComponent implements OnInit {

  post: Post;

  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        let id = +params['id']
        this.post = this.postService.getPostId(id);
        console.log(this.post)
      }
    )
  }

}
