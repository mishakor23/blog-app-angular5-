import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { HeaderComponent } from './header/header.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostComponent } from './full-post/post/post.component';
import { CommentComponent } from './full-post/comment/comment.component';
import { CommentsComponent } from './full-post/comments/comments.component';
import { CommentsFormComponent } from './full-post/comments-form/comments-form.component';
import { PostEditFormComponent } from './posts-list/post-edit-form/post-edit-form.component';
import { FullPostComponent } from './full-post/full-post.component';
import { PostService } from './full-post/post/post.service';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
     { path: '', redirectTo: '/posts-list', pathMatch: 'full' },
     { path: 'posts-list', component: PostsListComponent },
     { path: 'post/:id', component: FullPostComponent },
     { path: 'post-add-form', component: PostEditFormComponent },
     { path: 'post-edit-form/:id', component: PostEditFormComponent },
     { path: 'comment-edit-form', component: CommentsFormComponent },
   ];

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
    AngularFireDatabaseModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})

export class AppModule { }
