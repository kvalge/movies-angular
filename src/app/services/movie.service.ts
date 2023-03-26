import {MovieModel} from "../pages/movies/movie.model";

export class MovieService {

  private movies: MovieModel[] = [];

  setMovies(movies: MovieModel[]) {
    this.movies = movies;
  }

  getMovies() {
    return this.movies;
  }
}
