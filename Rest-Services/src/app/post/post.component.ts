import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/Services/post.service';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: any = []
  constructor(private service : PostService) { }

  ngOnInit(): void {
    this.service.getPosts()
                .subscribe((response) => {
                  this.posts = response;
                });
  }

  createPost(data : HTMLInputElement){
    let post = {title : data.value}
    this.service.createPosts(post)
                .subscribe(response => {
                  this.posts.splice(0,0,response);
                });
    data.value = "";
  }

  updatePost(post : any) {
    post.title = "Updated title";
    this.service.updatePost(post)
                .subscribe((Response) =>{
                  let index = this.posts.indexOf(post);
                  this.posts.splice(index,1, post);
                });

  }

  deletePost(post : any) {
    this.service.deletePost(post)
                .subscribe(Response =>{
                  let index = this.posts.indexOf(post);
                  this.posts.splice(index,1);
                });
  }
  

}
