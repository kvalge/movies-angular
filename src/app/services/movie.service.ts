import {MovieModel} from "../pages/movies/movie.model";
import {MovieDetailsModel} from "../pages/movies/movie-list/movie-details/movie-details.model";

export class MovieService {

  private movieDetails: MovieDetailsModel[] = [];
  private details: MovieDetailsModel;

  setMovieDetails(details: MovieDetailsModel[]) {
    this.movieDetails = details;
  }

  getMovieDetails() {
    return this.movieDetails;
  }

  setDetails(details: MovieDetailsModel) {
    this.details = details;
    console.log("service: " + details)
  }

  getDetails() {
    console.log("get: " + this.details)
    return this.details;
  }
}
