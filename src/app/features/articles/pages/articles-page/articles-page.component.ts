import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../../core/services/post.service';
import { Post } from '../../../../core/model/post.model';

@Component({
  selector: 'app-articles-page',
  templateUrl: './articles-page.component.html',
  styleUrls: ['./articles-page.component.scss']
})
export class ArticlesPageComponent implements OnInit {
  posts: Post[] = [];
  loading: boolean = true;
  selectedPost: Post | null = null;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getPosts();
    this.postService.getUpdatedPosts().subscribe(updatedPosts => {
      this.posts = updatedPosts;
      console.log('Posts!', this.posts);
      this.loading = false;
    });
  }

  showFullPost(post: Post) {
    this.selectedPost = post;
  }

  closeFullPost() {
    this.selectedPost = null;
  }
}
