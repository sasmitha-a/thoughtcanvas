import { Component } from '@angular/core';
import { PostService } from '../../../../core/services/post.service';
import { Post } from '../../../../core/model/post.model';

@Component({
  selector: 'new-post',
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.scss'
})
export class NewPostComponent {
  constructor(private postService:PostService){}
  title:string='';
  content:string='';
  
  addPost(){
  let validForNow:boolean = true;
  
  if(!validForNow) return;
  
  let newPost:Post = {
    id: 'an id',
    title: this.title,
    content : this.content
  }
  
    this.postService.addPost(newPost);
  }
}
