import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { QuillEditorComponent } from 'ngx-quill';
import { PostService } from '../../../../core/services/post.service';
import { Post } from '../../../../core/model/post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-writing-page',
  templateUrl: './writing-page.component.html',
  styleUrls: ['./writing-page.component.scss'] // Corrected typo from styleUrl to styleUrls
})
export class WritingPageComponent implements AfterViewInit {
  @ViewChild('textEditor') textEditor!: QuillEditorComponent;
  editorContent!: string;
  title: string = '';

  constructor(private postService: PostService, private router: Router) {}

  ngAfterViewInit() {
    console.log(this.textEditor);
  }

  onEditorContentChanged(event: any): void {
    this.editorContent = event.html;
  }

  sendContent(): void {
    console.log('Sending content:', this.editorContent);

    let validForNow: boolean = true;
    if (!validForNow) return;

    let newPost: Post = {
      id: '', // The backend will typically generate the ID
      title: this.title,
      content: this.editorContent
    };

    this.postService.addPost(newPost);
    this.router.navigate(['/articles']);
  }
}
