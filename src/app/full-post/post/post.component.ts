import { Component, OnInit, Input } from '@angular/core';
import { Post } from './post.model';
import { ActivatedRoute, Params } from '@angular/router';
import { PostService } from './post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Post;
  id: number;

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.post = this.postService.getPostId(this.id);
      }
    )
  }
}
