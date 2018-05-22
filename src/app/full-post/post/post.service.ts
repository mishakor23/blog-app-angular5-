import { Post } from './post.model';

export class PostService {

  posts: Post[] = [
    new Post(1, 'A car post', 'post about cars', new Date(), [{id: 1, userName: 'Rolya', message: 'sdfasdf'}]),
    new Post(2, 'A car post', 'post about cars', new Date(), [{id: 2, userName: 'Kolya', message: 'sdfasdf'}, {id: 3, userName: 'Ann', message: 'sdfasdfsadfdgsa'}]),
    new Post(3, 'A car post', 'post about cars', new Date(), [{id: 4, userName: 'Olya', message: 'sdfasdf'}, {id: 5, userName: 'Stan', message: 'sdfasdf'}, {id: 6, userName: 'Sam', message: 'sdfasdf'}])
  ];

  getPost() {
    return this.posts;
  }

  getPostId(index: number) {
    return this.posts[index];
  }

  deletePost(post) {
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);
  }
}
