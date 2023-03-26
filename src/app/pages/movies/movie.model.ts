import {CategoryModel} from "../categories/category.model";

export class MovieModel {
  private id: number;
  private name: string;
  private category: CategoryModel;

  constructor(id: number, name: string, category: CategoryModel) {
    this.id = id;
    this.name = name;
    this.category = category;
  }
}
