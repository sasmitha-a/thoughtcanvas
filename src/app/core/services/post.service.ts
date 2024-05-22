import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, map, of } from 'rxjs';
import { mockPosts } from '../../../../backend/mock.backend'
import { Post } from '../model/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postsList: Post[] = [];
  private postsSubject = new Subject<Post[]>();

  constructor(private http: HttpClient) { }

  //GET
  getPosts() {
    this.http.get<{ message: string, posts: any }>('http://localhost:3000/api/posts')
      .pipe(map((postData) => {
        return postData.posts.map((post: { title: any; content: any; _id: any; }) => {
          return {
            title: post.title,
            content: post.content,
            id: post._id
          }
        })
      }))
      .subscribe(transformedPosts => {
        this.postsList = transformedPosts;
        this.postsSubject.next([...this.postsList]);
        console.log('Datos transformados:', this.postsList);
      },
        () => {
          console.log('Database failed. Loading mock posts...');
          this.postsList = mockPosts;
          this.postsSubject.next([...mockPosts]);
        });
  }

  getUpdatedPosts(): Observable <Post[]> {
    return this.postsSubject.asObservable();
  }



  //POST
  addPost(newPost: Post) {
    this.http.post<{ message: string }>('http://localhost:3000/api/posts', newPost).subscribe(res => {
      console.log(res.message);
      this.postsList.push(newPost);
      this.postsSubject.next([...this.postsList]);
    })
  }
}
