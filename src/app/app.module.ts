import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PreferitiComponent } from './preferiti/preferiti.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    PostDetailsComponent,
    PreferitiComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
