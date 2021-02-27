import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { CreateArticleModule } from './components/create-article/create-article.module';

@NgModule({
  declarations: [
    FeedComponent,
  ],
  imports: [
    CommonModule,
    CreateArticleModule
  ],
  exports: [
  ]
})
export class FeedModule { }
