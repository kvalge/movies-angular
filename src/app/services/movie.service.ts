import {MovieDetailsModel} from "../pages/movies/movie-list/movie-details/movie-details.model";
import {Injectable} from "@angular/core";

@Injectable()
export class MovieService {

  private allDetails: MovieDetailsModel[] = [];
  private details: MovieDetailsModel;

  setAllDetails(details: MovieDetailsModel[]) {
    this.allDetails = details;
  }

  getAllDetails() {
    return this.allDetails;
  }

  setDetails(details: MovieDetailsModel) {
    this.details = details;
  }

  getDetails() {
    return this.details;
  }
}
