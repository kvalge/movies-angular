import {CategoryModel} from "../categories/category.model";

export class MovieModel {
  public id: number;
  public name: string;
  public category: CategoryModel;

  constructor(id: number, name: string, category: CategoryModel) {
    this.id = id;
    this.name = name;
    this.category = category;
  }
}
