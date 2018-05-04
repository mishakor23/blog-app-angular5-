import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../full-post/post/post.model';

@Component({
  selector: 'app-post-edit-form',
  templateUrl: './post-edit-form.component.html',
  styleUrls: ['./post-edit-form.component.css']
})
export class PostEditFormComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

}
