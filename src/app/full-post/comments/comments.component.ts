import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post/post.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input() comments;

  constructor() { }

  ngOnInit() {
  }

}
