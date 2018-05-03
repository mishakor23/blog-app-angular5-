import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { HeaderComponent } from './header/header.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostComponent } from './posts-list/post/post.component';
import { CommentComponent } from './posts-list/post/comment/comment.component';
import { CommentsComponent } from './posts-list/post/comments/comments.component';
import { CommentsFormComponent } from './posts-list/post/comments-form/comments-form.component';
import { PostEditFormComponent } from './posts-list/post-edit-form/post-edit-form.component';
import { FullPostComponent } from './full-post/full-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostsListComponent,
    PostComponent,
    CommentComponent,
    CommentsComponent,
    CommentsFormComponent,
    PostEditFormComponent,
    FullPostComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
