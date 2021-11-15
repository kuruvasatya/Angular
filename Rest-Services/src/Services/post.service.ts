import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url: string = "https://jsonplaceholder.typicode.com/posts"
  constructor(private Http : HttpClient) { }

  getPosts() {
    return this.Http.get(this.url);
  }

  createPosts(post:any) {
    return this.Http.post(this.url, post);
  }

  updatePost(post: any) {
    return this.Http.put(this.url + "/" + post.id, post);
  }

  deletePost(post :any) {
    return this.Http.delete(this.url + "/" + post.id);
  }

}
