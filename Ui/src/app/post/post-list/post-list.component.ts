import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  postSubscription: Subscription;
  constructor(public postsService: PostService) { }
  ngOnInit() {
    this.posts = this.postsService.getPosts();
    this.postSubscription = this.postsService.getPostUpdateListener().subscribe(
      (post: Post[]) => {
        this.posts = post;
      }
    );
  }
  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }
}
