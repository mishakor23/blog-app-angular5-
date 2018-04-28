export class Post {
  public id: number;
  public title: string;
  public description: string;
  public date: string;

  constructor(id: number, title: string, description: string, date: string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.date = date;
  }
}
