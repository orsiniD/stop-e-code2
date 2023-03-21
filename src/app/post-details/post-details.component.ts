import { Component, Input } from '@angular/core';
import { Post } from '../models/posts';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
})
export class PostDetailsComponent {
  @Input()
  post?: Post;

  constructor(public ps: PostsService) {

  }
}
