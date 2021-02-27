import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './containers/layout/layout.component';
import { SideMenuComponent } from './containers/side-menu/side-menu.component';
import { FeedModule } from './containers/content/feed/feed.module';
import { InfoCardComponent } from './containers/aside/info-card/info-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SideMenuComponent,
    InfoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
