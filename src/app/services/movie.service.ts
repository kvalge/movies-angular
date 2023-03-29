import {MovieModel} from "../pages/movies/movie.model";
import {MovieDetailsModel} from "../pages/movies/movie-list/movie-details/movie-details.model";

export class MovieService {

  private movieDetails: MovieDetailsModel[] = [];

  setDetails(details: MovieDetailsModel[]) {
    this.movieDetails = details;
  }

  getMovies() {
    return this.movieDetails;
  }
}
