import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../../../core/model/post.model';

@Component({
  selector: 'article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent {
  @Input() post!: Post;
  @Output() showFullPost = new EventEmitter<Post>();

  onCardClick() {
    this.showFullPost.emit(this.post);
  }
}
