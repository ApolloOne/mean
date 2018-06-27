import {
  Component
} from '@angular/core';
import { Post } from '../post.model';
import { NgForm } from '@angular/forms';
import { PostService } from '../post.service';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent  {
  constructor(public postSevice:PostService) {}
  onAddPost(PostForm: NgForm) {
    const post: Post = {
      title: PostForm.value.title,
      content: PostForm.value.content
    };
    this.postSevice.addPost(post);
  }
  
  
}
