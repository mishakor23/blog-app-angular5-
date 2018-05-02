export class Post {
  public id: number;
  public title: string;
  public description: string;
  public date: any;
  public comments: any;

  constructor(id: number, title: string, description: string, date: any, comments: any) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.date = date;
    this.comments = comments;
  }
}
