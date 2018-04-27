import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  posts: Observable<any[]>;

  constructor(db: AngularFirestore) {
      const settings = {timestampsInSnapshots: true};
      db.app.firestore().settings(settings);

      this.posts = db.collection('posts').valueChanges();
  }
}
