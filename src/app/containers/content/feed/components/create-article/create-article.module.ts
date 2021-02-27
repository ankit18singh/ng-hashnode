import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateArticleComponent } from './create-article.component';

@NgModule({
  declarations: [
    CreateArticleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CreateArticleComponent
  ]
})
export class CreateArticleModule { }
