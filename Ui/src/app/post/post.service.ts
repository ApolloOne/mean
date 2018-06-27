import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class PostService {
    private posts: Post[] = [];
    private postUpdated=new Subject<Post[]>();
    getPosts() {
        return this.posts;
    }
    getPostUpdateListener(){
        return this.postUpdated.asObservable();
    }
    addPost(post: Post) {
        this.posts.push(post);
        this.postUpdated.next([...this.posts]);
    }
}