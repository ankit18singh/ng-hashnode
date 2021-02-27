import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './content.routes';
import { FeedModule } from './feed/feed.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FeedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ContentModule {}
