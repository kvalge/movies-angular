export class MovieModel {
  public id: number;
  public name: string;
  public categoryName: string;

  constructor(id: number, name: string, categoryName: string) {
    this.id = id;
    this.name = name;
    this.categoryName = categoryName;
  }
}

