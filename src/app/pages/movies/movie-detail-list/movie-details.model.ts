export class MovieDetailsModel {
  public director: string;
  public writer: string;
  public stars: string;
  public year: string;
  public country: string;
  public description: string;
  public price: string;
  public image: string;
  public movieName: string;

  constructor(director: string, writer: string, stars: string, year: string, country: string, description: string, price: string, image: string, movieName: string) {
    this.director = director;
    this.writer = writer;
    this.stars = stars;
    this.year = year;
    this.country = country;
    this.description = description;
    this.price = price;
    this.image = image;
    this.movieName = movieName;
  }
}
